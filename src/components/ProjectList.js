export default function ProjectList({list}) {
    return (
        <>
            {list &&
                <ul className="projects">
                    {list.map((project) => (
                        <li className="project" key={project.title}>
                            <h3 className="projectTitle">{project.title}</h3>
                            <span className="projectDescription">{project.description}</span>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}
