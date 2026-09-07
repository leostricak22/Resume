import {HeaderData} from "../SectionData";
import Prompt from "./Prompt";

export default function Header() {
    return (
        <header className="header">
            <Prompt command={HeaderData.prompt} />
            <h1 className="name">{HeaderData.name}</h1>
            <p className="intro">{HeaderData.intro}</p>
            <div className="chips">
                {HeaderData.chips.map((chip) => (
                    chip.href
                        ? <a className="chip" href={chip.href} key={chip.value}>{chip.value}</a>
                        : <span className={"chip" + (chip.faint ? " chipFaint" : "")} key={chip.value}>{chip.value}</span>
                ))}
            </div>
        </header>
    );
}
