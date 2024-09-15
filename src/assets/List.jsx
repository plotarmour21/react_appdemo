import React from "react";

export default function List(props) {


  const itemlist=props.items;
  itemlist.sort((a, b) => a.name.localeCompare(b.name));
  const listitems = itemlist.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; calories {item.calories}
    </li>
  ));

  return <ol>{listitems}</ol>;
}
List.defaultProps={
    id:Number

}