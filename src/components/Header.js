import {HeaderData} from "../SectionData";
import Portrait from "../assets/images/portrait.jpg";

export default function Header() {
    return (
        <div className="hero">
            <header className="masthead">
                <h1 className="name">
                    {HeaderData.name.split(" ").map((word) => <span className="nameWord" key={word}>{word}</span>)}
                </h1>
                <p className="role">{HeaderData.role}</p>
            </header>

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

            <div className="portrait">
                <img src={Portrait} alt={HeaderData.name} />
            </div>
        </div>
    );
}
