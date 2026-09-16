import {HeaderData} from "../SectionData";

export default function Header() {
    return (
        <>
            <header className="masthead">
                <h1 className="name">
                    {HeaderData.name.split(" ").map((word) => <span className="nameWord" key={word}>{word}</span>)}
                </h1>
                <p className="role">{HeaderData.role}</p>
            </header>

            {/* Full-bleed colour band: the summary and contacts get poster
                treatment instead of sitting quietly under the name. */}
            <div className="band">
                <div className="bandInner">
                    <p className="summary">{HeaderData.intro}</p>
                    <p className="contacts">
                        {HeaderData.chips.map((chip) => (
                            chip.href
                                ? <a className="contact" href={chip.href} key={chip.value}>{chip.value}</a>
                                : <span className="contact contactPlain" key={chip.value}>{chip.value}</span>
                        ))}
                    </p>
                </div>
            </div>
        </>
    );
}
