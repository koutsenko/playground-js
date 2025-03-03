import React from "react";
import ReactDOM from "react-dom-client";
import { Carousel } from "./Components/Carousel/Carousel";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="App">
      <Carousel />
    </div>
  </React.StrictMode>
);
