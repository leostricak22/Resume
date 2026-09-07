export default function SkillList({list}) {
    return (
        <>
            {list &&
                <ul className="skillList">
                    {list.map((item) => (
                        <li className="skill" key={item.value}>
                            <img
                                className={"skillIcon" + (item.boost ? " skillIconBoost" : "")}
                                src={item.icon}
                                alt=""
                            />
                            <span className="skillValue">{item.value}</span>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}
