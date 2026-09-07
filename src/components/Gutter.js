// Renders a date/label gutter cell. A trailing "Present" is highlighted in the
// accent colour; an array of dates stacks them.
function renderValue(value) {
    const suffix = " — Present";

    if (typeof value === "string" && value.endsWith(suffix)) {
        return (
            <>
                {value.slice(0, -suffix.length)}{" — "}
                <span className="present">Present</span>
            </>
        );
    }

    return value;
}

export default function Gutter({value}) {
    if (Array.isArray(value)) {
        return (
            <div className="gutter gutterStack">
                {value.map((entry) => <span key={entry}>{renderValue(entry)}</span>)}
            </div>
        );
    }

    return <span className="gutter">{renderValue(value)}</span>;
}
