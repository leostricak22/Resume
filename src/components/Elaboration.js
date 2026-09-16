export default function Elaboration({elaborations}) {
    return (
        <>
            {elaborations.elaboration.map((elaboration) => (
                elaboration.style === "description"
                    ? <p className="entryText" key={elaboration.value}>{elaboration.value}</p>
                    : <p className="entrySubtitle" key={elaboration.value}>{elaboration.value}</p>
            ))}
        </>
    );
}
