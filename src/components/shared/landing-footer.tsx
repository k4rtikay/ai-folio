import { UsernameForm } from "./username-form";

export default function LandingFooter() {
    return (
        <footer
            className="relative w-full h-[500px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 h-[500px] w-full">
                <FooterContent />
            </div>
        </footer>
    );
}

function FooterContent() {
    return (
        <div className="relative h-full w-full bg-card px-2 py-4 flex flex-col items-center justify-between">
            <div className="z-10 w-full flex justify-center px-4 py-2">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-neutral-400">
                            Product
                        </h3>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Security
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-neutral-400">
                            Resources
                        </h3>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Docs
                        </a>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Github
                        </a>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Blog
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-neutral-400">
                            Contact
                        </h3>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Contribute
                        </a>
                        <a
                            href="#"
                            className="w-fit text-sm text-neutral-500 hover:text-neutral-300 transition duration-125"
                        >
                            Feedback
                        </a>
                    </div>

                    {/*<UsernameForm />*/}
                </div>
            </div>
            <span
                className="
                    pointer-events-none
                    absolute
                    hidden
                    md:block
                    left-1/2
                    top-[62%]
                    w-full
                    -translate-x-1/2
                    -translate-y-1/2
                    text-center
                    text-[20cqw]
                    font-thin
                    tracking-tight
                    leading-none
                    select-none
                    text-transparent
                    bg-clip-text
                    [-webkit-background-clip:text]
                    bg-gradient-to-b
                    from-green-500/40
                    via-neutral-700/35
                    to-neutral-900/35
                    [mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_90%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_90%)]
                "
            >
                GitXhibit
            </span>
            <p className="text-center text-sm tracking-wide text-neutral-600">
                © 2026 GitXhibit. All rights reserved.
            </p>
        </div>
    );
}