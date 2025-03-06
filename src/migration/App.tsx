import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ProgressBarContainer } from "./React/ProgressBar/ProgressBarContainer";
import Menu from "./Menu";
import DraggableDemo from './React/Draggable/DraggableDemo';

const App: React.FC = () => {
  const environment = process.env.VITE_GITHUB_WORKSPACE
    ? "Github"
    : process.env.VITE_CODESANDBOX_HOST
    ? "CodeSandbox.io"
    : "manual";

  return (
    <Router>
      <nav>
        <p>Environment: {environment}</p>
        <Link to="/">Главная</Link>
        <hr />
      </nav>
      <Routes>
        <Route path="/react/progress-bar" element={<ProgressBarContainer />} />
        <Route path="/react/draggable" element={<DraggableDemo />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
