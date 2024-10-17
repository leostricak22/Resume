import List from "./List";

export default function SubSection({subSection}) {
    return (
        <fieldset className="subSection">
            { subSection.name && <legend className="subSectionTitle">{subSection.title}</legend> }
            <List list={subSection.list} />
        </fieldset>
    );
}