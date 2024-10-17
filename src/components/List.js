export default function List({list}) {
    return (
        <ul>
            {
                list.map((item) => {
                    return (
                        <li className={Array.isArray(item.value) && "multipleList"}>
                            { item.icon && item.icon
                                }
                            { item.href && <a href={item.href}>{item.value}</a> }
                            { !item.href && (
                                <div>
                                    {
                                        Array.isArray(item.value) ? item.value.map((itemValue) => {
                                                return <p className="list">{itemValue}</p>
                                            })
                                        : item.value
                                    }
                                </div>
                            )}
                        </li>
                    );
                })
            }
        </ul>
    );
}