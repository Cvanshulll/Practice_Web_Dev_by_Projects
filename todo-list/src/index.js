import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const inputItem = (e) => {
    setItem(e.target.value);
  };

  const addItem = (e) => {
    setListItem((oldList) => {
      return [...oldList, item];
    }, setItem(""));
  };

  return (
    <>
      <div className="main_div">
        <div id="center_div">
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            value={item}
            onChange={inputItem}
          />
          <button className="put" onClick={addItem}>
            +
          </button>
          <ul>
            {listItem.map((val, id) => {
              return <List key={id} text={val} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
