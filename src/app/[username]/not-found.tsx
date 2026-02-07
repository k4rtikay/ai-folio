export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-muted-foreground">Portfolio Not Found</h1>
        <p className="text-muted-foreground mb-8">
          This user hasn't created a portfolio yet.
        </p>
        <a href="/" className="text-primary hover:underline transition-colors">
          Create your own portfolio →
        </a>
      </div>
    </div>
  );
}