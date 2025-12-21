export default async function HomePage() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-between px-4 py-2">
        <h1>GitExhibit</h1>
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
          <label htmlFor="username" className="sr-only">Enter Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your github username..."
            className="rounded-md border border-gray-300 px-3 py-2 w-60"
          />
          <button type="submit" className="rounded-md bg-black px-3 py-2 text-white">Create</button>
        </form>
      </main>

      <footer className="flex flex-col gap-2 w-full bg-gray-50 py-2">
        <div className="flex justify-between px-4 py-2">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Docs</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Github</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Support</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contribute</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Feedback</a>
            </div>

            <form action="" className="flex flex-col gap-2">
              <label htmlFor="username" className="sr-only">Enter Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your github username..."
                id="username"
                className="rounded-md border border-gray-300 px-3 py-2 w-40 lg:w-60 h-fit"
              />
              <button type="submit" className="rounded-md bg-black px-3 py-2 text-white h-fit w-fit">Create</button>
            </form>
          </div>
        </div>
        <h1
        className="text-center text-[80px] md:text-[200px] font-bold text-gray-200">GitExhibit</h1>
        <p className="text-center text-gray-600">© 2025 Exhibit AI. All rights reserved.</p>
      </footer>
    </div>
  );
} 