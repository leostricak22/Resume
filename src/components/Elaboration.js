export default function Elaboration({elaborations}) {
    return (
        <ul className="elaborationList">
            {
                elaborations.elaboration.map((elaboration) => {
                    return (
                        <li className="elaboration">
                            {
                                elaboration.style === "gold" ? <span className="gold">{elaboration.value}</span> :
                                elaboration.style === "normal" ? <span className="normal">{elaboration.value}</span> :
                                elaboration.style === "moreInfo" && <span className="moreInfo">{elaboration.value}</span>
                            }
                        </li>
                    )
                })
            }
        </ul>
    );
}