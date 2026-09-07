import Elaboration from "./Elaboration";
import Gutter from "./Gutter";

export default function List({list}) {
    function getItemValue(item) {
        if (Array.isArray(item.value)) {
            return (
                <div className="rowLines">
                    {item.value.map((itemValue) => <span className="rowLine" key={itemValue}>{itemValue}</span>)}
                </div>
            );
        }

        return <span className="rowLine">{item.value}</span>;
    }

    return (
        <>
            {list &&
                <ul className="rows">
                    {list.map((item) => (
                        <li className="row" key={item.gutter}>
                            <Gutter value={item.gutter} />
                            <div className="rowBody">
                                {item.title &&
                                    <div className="rowTitle">
                                        {item.title}
                                        {item.company && <span className="rowCompany">{" · " + item.company}</span>}
                                    </div>
                                }
                                {item.value && getItemValue(item)}
                                {item.elaboration && <Elaboration elaborations={item} />}
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}
