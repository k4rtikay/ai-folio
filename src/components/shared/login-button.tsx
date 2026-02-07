"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LoginButton() {

    const { data: session } = authClient.useSession()
    const router = useRouter()

    return session ? (
        <Button
            variant="outline"
            size="sm"
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
            variant="outline"
            size="sm"
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
}