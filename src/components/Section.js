import SubSection from "./SubSection";
import List from "./List";
import SkillList from "./SkillList";

export default function Section({section}) {
    return (
        <fieldset className={"section " + (section.sectionFlex === "column" && "sectionCol")}>
            <legend className="sectionTitle">
                <span className="ejsTag">{"<%= "}</span>
                <span className="sectionTitleValue">{section.title}</span>
                <span className="ejsTag">{" %>"}</span>
            </legend>

            {
                section.subSections && section.subSections.map((subSection) => {
                    return <SubSection subSection={subSection}/>
                })
            }

            <List list={section.list} />
            <SkillList list={section.skillList} />
        </fieldset>
    );
}