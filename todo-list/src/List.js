import React, { useState } from "react";
import "./index.css";

const List = (props) => {
  const [list, SetList] = useState(false);

  const deleteItem = () => {
    SetList(true);
  };

  return (
    <>
      <li
        style={{
          textDecoration: list ? "line-through" : "none",
          margin: "5px"
        }}
      >
        <button className="cut" onClick={deleteItem}>
          X
        </button>
        {props.text}
      </li>
    </>
  );
};

export default List;
