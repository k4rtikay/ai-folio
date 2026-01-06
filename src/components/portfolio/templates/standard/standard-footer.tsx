interface StandardFooterProps {
    name: string;
}

export default function StandardFooter({ name }: StandardFooterProps) {
    return (
        <footer
            className="w-full text-center text-xs @md:text-sm tracking-wide opacity-70 p-4 border-t"
            style={{ borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)" }}
        >
            <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
            <p>Built with <a
                href="https://github.com/k4rtikay/ai-folio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold mt-2">
                GitExhibit
            </a>
            </p>
        </footer>
    );
}