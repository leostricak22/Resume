import SubSection from "./SubSection";
import List from "./List";
import ProjectList from "./ProjectList";

export default function Section({section}) {
    return (
        <section className={"section section-" + section.name}>
            <h2 className="sectionTitle">{section.title}</h2>

            {section.subSections &&
                <div className="subSections">
                    {section.subSections.map((subSection) => (
                        <SubSection subSection={subSection} key={subSection.name} />
                    ))}
                </div>
            }

            <List list={section.list} />
            <ProjectList list={section.projectList} />
        </section>
    );
}
