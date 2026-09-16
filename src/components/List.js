import Elaboration from "./Elaboration";
import Gutter from "./Gutter";

export default function List({list}) {
    function getItemValue(item) {
        if (Array.isArray(item.value)) {
            return (
                <div className="entryLines">
                    {item.value.map((itemValue) => <span className="entryLine" key={itemValue}>{itemValue}</span>)}
                </div>
            );
        }

        return <span className="entryLine">{item.value}</span>;
    }

    return (
        <>
            {list &&
                <ul className="entries">
                    {list.map((item) => (
                        <li className="entry" key={item.gutter}>
                            {item.title
                                ? (
                                    <div className="entryHead">
                                        <div className="entryHeadMain">
                                            <h3 className="entryTitle">{item.title}</h3>
                                            {item.company && <p className="entryCompany">{item.company}</p>}
                                        </div>
                                        <Gutter value={item.gutter} />
                                    </div>
                                )
                                : <Gutter value={item.gutter} runIn />
                            }
                            {item.value && getItemValue(item)}
                            {item.elaboration && <Elaboration elaborations={item} />}
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}
