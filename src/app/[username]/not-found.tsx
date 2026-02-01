export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
        <p className="text-gray-600 mb-8">
          This user hasn't created a portfolio yet.
        </p>
        <a href="/" className="text-purple-600 hover:underline">
          Create your own portfolio →
        </a>
      </div>
    </div>
  );
}