import SectionData from "./SectionData";
import Section from "./components/Section";

function App() {
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
        </div>
    );
}

export default App;