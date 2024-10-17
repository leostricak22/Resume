import SectionData from "./SectionData";
import Section from "./components/Section";
import {IoSunnyOutline} from "react-icons/io5";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        if(theme === "dark") {
            setTheme("light");
            document.documentElement.style.setProperty('--themeColor', "#000");
            document.documentElement.style.setProperty('--themeBackgroundColor', "#d0d1d3");
            document.documentElement.style.setProperty('--themeJsonNameColor', "#000");
            document.documentElement.style.setProperty('--themeJsonValueColor', "#000");
        } else {
            setTheme("dark");
            document.documentElement.style.setProperty('--themeColor', "#fff");
            document.documentElement.style.setProperty('--themeBackgroundColor', "#2f3032");
            document.documentElement.style.setProperty('--themeJsonNameColor', "#93D0F0");
            document.documentElement.style.setProperty('--themeJsonValueColor', "#CB8F76");
        }
    }

    return (
        <div id="main">
            <p className="title">
                <span className="jsonBrackets">{"{"}</span>
                <span className="jsonName">"name"<span className="jsonBrackets">:</span> </span>
                <span className="jsonValue">"Leo Stričak"</span>
                <span className="jsonBrackets">{"}"}</span>
            </p>

            {
                SectionData.map((section) => {
                    return (
                        <Section section={section} />
                    );
                })
            }
            <div id="theme" onClick={toggleTheme}>
                <IoSunnyOutline />
            </div>
        </div>
    );
}

export default App;