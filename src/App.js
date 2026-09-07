import {useState} from "react";
import {IoMoonOutline, IoSunnyOutline} from "react-icons/io5";

import SectionData from "./SectionData";
import Section from "./components/Section";
import Titlebar from "./components/Titlebar";
import Header from "./components/Header";
import Prompt from "./components/Prompt";

function App() {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    }

    return (
        <div id="main">
            <div className="window">
                <Titlebar />
                <Header />

                <div className="body">
                    {SectionData.map((section) => <Section section={section} key={section.name} />)}

                    <div className="cursorFooter">
                        <Prompt>
                            <span className="cursor" />
                        </Prompt>
                    </div>
                </div>
            </div>

            <button
                id="theme"
                onClick={toggleTheme}
                aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " theme"}
                title={"Switch to " + (theme === "dark" ? "light" : "dark") + " theme"}
            >
                {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
            </button>
        </div>
    );
}

export default App;
