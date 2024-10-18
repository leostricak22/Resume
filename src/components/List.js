import Elaboration from "./Elaboration";

export default function List({list}) {
    function getItemValue(item) {
        if(Array.isArray(item.value)) {
            return (
                <div>
                    {
                        item.value.map((itemValue) => {
                            return <p className={"list"}>{itemValue}</p>
                        })
                    }
                </div>
            );
        }

        return item.value;
    }

    return (
        <ul>
            {
                list && list.map((item) => {
                    return (
                        <li>
                            <div className={"iconList " + (Array.isArray(item.value) && "multipleList ") + (item.gold && " gold ")}>
                                {item.icon && item.icon}
                                {item.href && <a href={item.href}>{getItemValue(item)}</a>}
                                {!item.href && (getItemValue(item))}
                            </div>

                            { item.elaboration && <Elaboration elaborations={item} /> }
                        </li>
                    );
                })
            }
        </ul>
    );
}