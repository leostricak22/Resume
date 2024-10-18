export default function SkillList({list}) {
    return (
        <ul className="skillList">
            {
                list && list.map((item) => {
                    return (
                        <li>
                            <div className="skill">
                                <span className="skillIcon">{item.icon}</span>
                                <span className="skillValue">{item.value}</span>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}