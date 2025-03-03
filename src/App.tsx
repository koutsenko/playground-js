import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ProgressBarContainer } from "./React/ProgressBarContainer";
import { Menu } from "./Menu";

const App = () => {
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
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
