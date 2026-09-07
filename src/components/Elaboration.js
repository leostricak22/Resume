export default function Elaboration({elaborations}) {
    return (
        <>
            {elaborations.elaboration.map((elaboration) => (
                elaboration.style === "description"
                    ? <p className="rowDescription" key={elaboration.value}>{elaboration.value}</p>
                    : <div className="rowSubtitle" key={elaboration.value}>{elaboration.value}</div>
            ))}
        </>
    );
}
