import "./App.css";

import React, { useRef } from "react";

import EditableBlock from "./components/EditableBlock";
import { provideBlockContext } from "./context/Block";
import RotationProperty from "./components/Properties/Rotate";
import Page from "./components/Page";
import PrintBlockContext from "./components/PrintBlockContext";

const PureApp = () => {
  const pageRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Page {...{ pageRef }}>
        <EditableBlock {...{ pageRef }} />
      </Page>
      <RotationProperty />
      <PrintBlockContext />
    </div>
  );
};

const App = ((Comp) => {
  Comp = provideBlockContext(Comp);

  return Comp;
})(PureApp);

export default App;
