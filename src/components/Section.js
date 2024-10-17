import SubSection from "./SubSection";

export default function Section({section}) {
    return (
        <fieldset className="section">
            <legend className="sectionTitle">
                <span className="ejsTag">{"<%= "}</span>
                <span className="sectionTitleValue">{section.title}</span>
                <span className="ejsTag">{" %>"}</span>
            </legend>
            {
                section.subSections.length > 0 && section.subSections.map((subSection) => {
                    return <SubSection subSection={subSection}/>
                })
            }
        </fieldset>
    );
}