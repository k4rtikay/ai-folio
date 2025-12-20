export default async function HomePage() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between px-4 py-2">
        <h1>AI Folio</h1>
        <span className="flex gap-2">
          <button>Github</button>
          <button>Login</button>
        </span>
      </header>
      <main className="flex flex-col items-center p-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Build Your Vision.
          </h1>
          <p className="mt-2 text-lg leading-8">
            Turn your github into your brand. Choose from many fun templates.
          </p>
        </div>
        <form action="" className="mt-6 flex gap-2">
          <input
            type="text"
            name="username"
            placeholder="Enter your github username..."
            className="rounded-md border border-gray-300 px-3 py-2 w-60"
          />
          <button type="submit" className="rounded-md bg-black px-3 py-2 text-white">Create</button>
        </form>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}