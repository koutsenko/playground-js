import * as React from "react";
import ReactDOM from "react-dom/client";

import EnumsDemo from "./components/EnumsDemo";
import InterfacesDemo from "./components/InterfacesDemo";

interface MyComponentProps {
  tokens: string[];
}

const MyComponent: React.FC<MyComponentProps> = ({ tokens }) => (
  <div>{tokens.join(" ")}</div>
);

const tokens = ["Hello", "webpack", "and", "react"];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div>
    <MyComponent {...{ tokens }} />
    <EnumsDemo />
    <InterfacesDemo />
  </div>
);
