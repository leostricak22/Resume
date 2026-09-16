import {useState} from "react";
import {IoDownloadOutline, IoMoonOutline, IoSunnyOutline} from "react-icons/io5";

import SectionData, {ResumeUrl} from "./SectionData";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
    // :root is the paper (light) ramp, so the page starts light until toggled.
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    }

    return (
        <div id="main">
            <Header />

            <div className="sections">
                {SectionData.map((section) => <Section section={section} key={section.name} />)}
            </div>

            <div className="corner">
                <a
                    className="cornerButton"
                    href={ResumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoDownloadOutline aria-hidden="true" />
                    <span>resume</span>
                </a>

                <button
                    id="theme"
                    className="cornerButton cornerIcon"
                    onClick={toggleTheme}
                    aria-label={"Switch to " + (theme === "light" ? "dark" : "light") + " theme"}
                    title={"Switch to " + (theme === "light" ? "dark" : "light") + " theme"}
                >
                    {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
                </button>
            </div>
        </div>
    );
}

export default App;
