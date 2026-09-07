export default function Prompt({command, children}) {
    return (
        <div className="prompt">
            <span className="promptGlyph">➜</span>
            {command && <span className="promptCommand">{command}</span>}
            {children}
        </div>
    );
}
