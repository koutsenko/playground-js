import React from "react";
import ReactDOM from "react-dom";

import Page1Page2Common from "../common";

const Page2 = () => (
  <div>
    <p>Page 2, just with react</p>
    <Page1Page2Common />
  </div>
);
const root = document.getElementById("container");

ReactDOM.render(<Page2 />, root);
