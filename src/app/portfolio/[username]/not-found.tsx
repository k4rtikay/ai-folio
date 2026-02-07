export default function NotFound(){
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col p-10 bg-card rounded-lg shadow-lg border border-foreground/5 items-center gap-2">
                <h1 className="text-2xl font-semibold text-red-500/80">404 Not Found</h1>
                <p className="text-muted-foreground text-sm">The page you are looking for does not exist.</p>
                <a href="/" className="mt-4 text-muted-foreground text-xs hover:underline transition-colors">Go back to home</a>
            </div>
        </div>
    )
}