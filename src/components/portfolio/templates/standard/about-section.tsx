import Image from "next/image";
import { MapPinIcon } from "lucide-react";

export default function AboutSection() {
    return (
        <div className="flex flex-col gap-4 w-full items-center justify-center border-t border-b border-gray-200 p-2">
            <div className="flex gap-4 w-full items-center">
                <div
                    className="w-[160px] h-[160px] rounded-full overflow-hidden border-2 border-gray-200"
                >
                    <Image src="https://images.unsplash.com/photo-1603480395003-2b5bc9efba56?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile"
                        width={160}
                        height={160}
                    />
                </div>
                <div className="h-full flex flex-col justify-between gap-2 px-4">
                    <div className="flex flex-col gap-2">
                        <span>
                            <h1 className="text-2xl font-bold">Alex Rivera</h1>
                            <p className="text-sm tracking-wide opacity-70">@git_alex</p>
                        </span>
                        <p className="text-sm tracking-wide opacity-70">Full Stack Engineer | Open Source Enthusiast | Building tools for devs</p>
                        <span className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            <p className="text-sm tracking-wide opacity-70">New York, NY</p>
                        </span>
                    </div>
                    <div className="flex gap-6 items-center border border-gray-200 p-2 rounded-md w-fit">
                        <a href="" rel="noreferrer nopener" target="_blank">
                            <svg role="img" className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </a>
                        <a href="" rel="noreferrer nopener" target="_blank">
                            <svg role="img" className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" /></svg>                        </a>
                        <a href="" rel="noreferrer nopener" target="_blank">
                            <svg role="img" className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" /></svg>                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">About Me</h2>
                <p className="text-base tracking-wide opacity-70">I am a Full Stack Engineer with over 5 years of experience in the JavaScript ecosystem. Currently working at Vercel, I specialize in building high-performance UI libraries and robust CI/CD pipelines. When I'm not coding, I'm writing about software architecture or contributing to open-source tools that simplify database management.</p>
            </div>
        </div>
    );
}