interface EditorPanelProps {
    username: string;
    className?: string;
}

export default function EditorPanel({ username, className }: EditorPanelProps) {
    return (
        <div className={className}>
            <h1>Editor Panel</h1>
        </div>
    );
}