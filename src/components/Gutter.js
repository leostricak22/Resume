// Renders the date/label column of an entry. A trailing "Present" is set in the
// full ink colour so the current role reads first; an array of dates stacks.
function renderValue(value) {
    const suffix = " - Present";

    if (typeof value === "string" && value.endsWith(suffix)) {
        return (
            <>
                {value.slice(0, -suffix.length)}{" - "}
                <span className="present">Present</span>
            </>
        );
    }

    return value;
}

export default function Gutter({value, runIn}) {
    const className = "dates" + (runIn ? " datesRunIn" : "");

    if (Array.isArray(value)) {
        return (
            <div className={className + " datesStack"}>
                {value.map((entry) => <span key={entry}>{renderValue(entry)}</span>)}
            </div>
        );
    }

    return <span className={className}>{renderValue(value)}</span>;
}
