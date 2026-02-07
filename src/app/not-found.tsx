export default function NotFound(){
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-muted-foreground">404 Not Found</h1>
                <p className="text-muted-foreground mb-8">
                    The page you are looking for does not exist.
                </p>
                <a href="/" className="text-primary hover:underline transition-colors">
                    Go back to home →
                </a>
            </div>
        </div>
    )
}