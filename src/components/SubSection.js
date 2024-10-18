import List from "./List";
import SkillList from "./SkillList";

export default function SubSection({subSection}) {
    return (
        <fieldset className="subSection">
            { subSection.name && <legend className="subSectionTitle">{subSection.title}</legend> }
            <List list={subSection.list} />

            <SkillList list={subSection.skillList} />
        </fieldset>
    );
}