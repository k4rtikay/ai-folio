"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LoginButton() {

    const {
        data: session,
        isPending,
        error,
        refetch
    } = authClient.useSession()

    const router = useRouter()

    return (

        isPending ? (
            <Button>Loading...</Button>
        ) : (
            session ? (
                <Button
                    onClick={async () => await authClient.signOut({
                        fetchOptions: {
                            onSuccess: () => {
                                router.refresh()
                            }
                        }
                    })}>
                    Logout
                </Button>
            ) : (
                <Button
                    onClick={async () => await authClient.signIn.social({
                        provider: "github",
                        fetchOptions: {
                            onError: (ctx) => {
                                console.log(ctx.error)
                            }
                        }
                    })}>
                    Login
                </Button>
            )
        )
    )
}