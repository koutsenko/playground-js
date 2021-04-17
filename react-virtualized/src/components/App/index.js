import React, { useRef } from "react";

import logo from "../../logo.svg";
import List from "../List";
import ListResizeable from "../ListResizeable";

import "./index.css";

function App() {
  const data = {
    allIds: [],
    byId: {},
  };

  // fill data by demo values
  for (let i = 0; i < 10000; i += 1) {
    let id = `${Math.random() * i + Math.random() * 0.12345}`;

    data.allIds.push(id);
    data.byId[id] = `list item ${id}`;
  }

  const resizeableRef = useRef();

  const handleScroll1 = () => resizeableRef.current.scrollToItem(200);
  const handleScroll2 = () => resizeableRef.current.scrollToItem(250, "smart");
  const handleScroll3 = () => resizeableRef.current.scrollToItem(300, "center");

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <div className="App-column">
        <h1 className="App-header">Fixed</h1>
        <List {...{ data }} />
      </div>
      <div className="App-column">
        <h1 className="App-header">Resizeable</h1>
        <h6 className="App-header-note">Resize window to see effect</h6>
        <ListResizeable {...{ data, ref: resizeableRef }} />
        <h6 className="App-header-note">Controls</h6>
        <div className="App-controls">
          <button onClick={handleScroll1} className="App-controls-button">
            Scroll to row 200 (align: auto)
          </button>
          <button onClick={handleScroll2} className="App-controls-button">
            Scroll to row 250 (align: smart)
          </button>
          <button onClick={handleScroll3} className="App-controls-button">
            Scroll to row 300 (align: center)
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
