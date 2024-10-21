export default function ProjectList({list}){
    return (
        <>
            {list &&
                <div className="projectListContainer">

                    <ul className="projectList">
                        {
                            list.map((project) => {
                                return (
                                    <li className="project">
                                        <div className="projectTitle">{project.title}</div>
                                        <div className="projectDescription">{project.description}</div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <p className="moreProjects">Click <a href="https://projects.barbuddy.net/">here</a> to see more information and more projects.</p>
                </div>
            }
        </>
    );
}