import {TitlebarData} from "../SectionData";

export default function Titlebar() {
    return (
        <div className="titlebar">
            <span className="titlebarPath">{TitlebarData.path}</span>
            <div className="titlebarButtons" aria-hidden="true">
                {TitlebarData.buttons.map((button) => (
                    <span className="titlebarButton" key={button}>{button}</span>
                ))}
            </div>
        </div>
    );
}
