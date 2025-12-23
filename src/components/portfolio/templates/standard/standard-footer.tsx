export default function StandardFooter() {
    return (
        <footer className="w-full text-center text-sm tracking-wide opacity-70 p-4 border-t border-gray-200 dark:border-gray-800">
            <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
        </footer>
    );
}