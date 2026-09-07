export default function ProjectList({list}) {
    return (
        <>
            {list &&
                <ul className="projectList">
                    {list.map((project) => (
                        <li className="project" key={project.title}>
                            <div className="projectTitle">{project.title}</div>
                            <p className="projectDescription">{project.description}</p>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}
