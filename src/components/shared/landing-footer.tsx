import { UsernameForm } from "./username-form";

export default function LandingFooter() {
    return (
        <footer className="flex flex-col gap-2 w-full bg-neutral-900 py-2">
        <div className="flex justify-between px-4 py-2">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-neutral-400">Product</h3>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Features</a>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Pricing</a>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Security</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-neutral-400">Resources</h3>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Docs</a>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Github</a>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Blog</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-neutral-400">Contact</h3>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Support</a>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Contribute</a>
              <a href="#" className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125">Feedback</a>
            </div>

            <UsernameForm />

          </div>
        </div>
        <h1
        className="text-center text-[80px] md:text-[200px] font-bold text-black/50 text-shadow-lg text-shadow-neutral-600/12 select-none">GitExhibit</h1>
        <p className="text-center text-neutral-600">© 2026 GitExhibit. All rights reserved.</p>
      </footer>
    );
}