import SafariFrame from "./safari-frame";

export default function UrlSkeleton() {
    return (
        <div className="absolute -bottom-8 -right-12 w-[600px] pointer-events-none mt-8 overflow-hidden">
            <SafariFrame className="w-full h-[250px] scale-100 translate-x-62" />
        </div>
    );
}
