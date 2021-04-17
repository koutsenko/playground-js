import "../common/font.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";

import Page1Page2Common from "../common";

const initialState = {
  data: "Page 1 with react and redux"
};
const reducer = (state = initialState) => state;
const store = createStore(reducer, initialState);
const MyComp = () => {
  const data = useSelector(state => state.data);

  return <div>{data}</div>;
};
const Page1 = () => (
  <Provider {...{ store }}>
    <MyComp />
    <Page1Page2Common />
    <div style={{ fontFamily: "Circe" }}>Test Circe font</div>
  </Provider>
);
const root = document.getElementById("container");

ReactDOM.render(<Page1 />, root);
