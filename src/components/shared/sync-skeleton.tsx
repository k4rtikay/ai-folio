"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function SyncSkeleton({ className = "" }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const leftTopRef = useRef<HTMLDivElement>(null);
    const leftBottomRef = useRef<HTMLDivElement>(null);
    const rightTopRef = useRef<HTMLDivElement>(null);
    const rightBottomRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className={`mt-12 absolute inset-0 overflow-hidden ${className}`}
            style={{
                maskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 72%)",
                WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 72%)",
            }}
        >
            {/* Beam anchors - invisible, beams simply fade into the mask here */}
            <div
                ref={leftTopRef}
                className="absolute left-[8%] top-[30%] h-px w-px"
            />
            <div
                ref={leftBottomRef}
                className="absolute left-[8%] top-[70%] h-px w-px"
            />
            <div
                ref={rightTopRef}
                className="absolute right-[8%] top-[30%] h-px w-px"
            />
            <div
                ref={rightBottomRef}
                className="absolute right-[8%] top-[70%] h-px w-px"
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={leftTopRef}
                curvature={-30}
                reverse
                duration={4}
                pathWidth={1.5}
                gradientStartColor="#bef264"
                gradientStopColor="#166534"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={leftBottomRef}
                curvature={30}
                reverse
                duration={4}
                delay={0.6}
                pathWidth={1.5}
                gradientStartColor="#bef264"
                gradientStopColor="#166534"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={rightTopRef}
                curvature={-30}
                duration={4}
                delay={0.3}
                pathWidth={1.5}
                gradientStartColor="#bef264"
                gradientStopColor="#166534"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={rightBottomRef}
                curvature={30}
                duration={4}
                delay={0.9}
                pathWidth={1.5}
                gradientStartColor="#bef264"
                gradientStopColor="#166534"
            />

            {/* Center node */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    ref={centerRef}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-300 via-green-500 to-green-800 shadow-[0_0_40px_rgba(16,185,129,0.45)]"
                >
                    <GithubLogo className="h-6 w-6 text-white" />
                </div>
            </div>
        </div>
    );
}

function GithubLogo({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.139 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}
