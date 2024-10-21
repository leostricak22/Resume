export default function SkillList({list}) {
    return (
        <>
            {list &&
                <ul className="skillList">
                    {
                        list.map((item) => {
                            return (
                                <li>
                                    <div className="skill">
                                        <div className={"skillIcon"}><img src={item.icon} alt={item.value} /></div>
                                        <span className="skillValue">{item.value}</span>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            }
        </>

    );
}