import List from "./List";
import SkillList from "./SkillList";

export default function SubSection({subSection}) {
    return (
        <div className="subSection">
            {subSection.title && <div className="subSectionTitle">{subSection.title}</div>}
            <List list={subSection.list} />
            <SkillList list={subSection.skillList} />
        </div>
    );
}
