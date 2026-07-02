"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LoginButton() {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    return session ? (
        <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-muted dark:bg-muted/90 hover:bg-muted dark:hover:bg-muted border-none dark:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15),inset_0px_2px_4px_1px_rgba(255,255,255,0.025)]"
            onClick={async () =>
                await authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.refresh();
                        },
                    },
                })
            }
        >
            Logout
        </Button> 
    ) : (
        <Button
            variant="outline"
            className="rounded-full bg-muted dark:bg-muted/90 hover:bg-muted dark:hover:bg-muted border-none dark:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15),inset_0px_2px_4px_1px_rgba(255,255,255,0.025)]"
            onClick={async () =>
                await authClient.signIn.social({
                    provider: "github",
                    fetchOptions: {
                        onError: (ctx) => {
                            console.log(ctx.error);
                        },
                    },
                })
            }
        >
            Sign In
        </Button>
    );
}
