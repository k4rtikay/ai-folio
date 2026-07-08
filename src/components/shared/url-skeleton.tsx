import SafariFrame from "./safari-frame";

export default function UrlSkeleton() {
    return (
        <div
            className="absolute -bottom-8 -right-12 w-[600px] pointer-events-none mt-8 overflow-hidden"
            style={{
                maskImage:
                    "radial-gradient(ellipse at top right, black 45%, transparent 80%)",
                WebkitMaskImage:
                    "radial-gradient(ellipse at top right, black 45%, transparent 80%)",
            }}
        >
            <SafariFrame className="w-full h-[250px] scale-90 sm:scale-100 translate-x-60 lg:translate-x-62" />
        </div>
    );
}
