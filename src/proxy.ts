import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { redis } from "./lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { ipAddress } from "@vercel/functions";

const viewLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(200, "60s"),
    prefix: "ratelimit:view",
});

const apiLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, "60s"),
    prefix: "ratelimit:api",
});

export async function proxy(request: NextRequest) {
    const ip =
        ipAddress(request) ??
        request.headers.get("x-forwarded-for") ??
        "127.0.0.1";

    const { pathname } = request.nextUrl;

    let limiter: Ratelimit;
    if (pathname.startsWith("/api/")) {
        limiter = apiLimiter;
    } else {
        limiter = viewLimiter;
    }

    let rateLimitResult: Awaited<ReturnType<Ratelimit["limit"]>>;

    try {
        rateLimitResult = await limiter.limit(ip);
    } catch (error) {
        console.error("Upstash rate limit request failed", {
            pathname,
            ip,
            error,
            cause: error instanceof Error ? error.cause : undefined,
        });
        throw error;
    }

    const { success, limit, reset, remaining } = rateLimitResult;

    if (!success) {
        return NextResponse.json(
            { error: "Too many requests" },
            {
                status: 429,
                headers: {
                    "X-RateLimit-Limit": limit.toString(),
                    "X-RateLimit-Remaining": remaining.toString(),
                    "X-RateLimit-Reset": reset.toString(),
                },
            },
        );
    }

    const res = NextResponse.next();
    res.headers.set("X-RateLimit-Limit", limit.toString());
    res.headers.set("X-RateLimit-Remaining", remaining.toString());
    res.headers.set("X-RateLimit-Reset", reset.toString());
    return res;
}

export const config = {
    matcher: [
        "/api/:path*",
        "/((?!api|_next/static|_next/image|favicon.ico|$).*)",
    ],
};
