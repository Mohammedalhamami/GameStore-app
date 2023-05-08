import { useState } from "react";

//typescirpt(interface) feature to add datat to component, that will make the component reuslable for another inputed data
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  //[0]=> variable, [1]=> function that change the variable
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* shorthand: ctrl+p, +d  react return just one element,to solve this
      problem we use Fragment
    <> represent fragment. */}
      <h1>{heading}</h1>
      {/* instead of using ternary op. in if condition, we use && */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
