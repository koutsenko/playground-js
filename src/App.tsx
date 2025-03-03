import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ProgressBarContainer } from "./React/ProgressBarContainer";
import { Menu } from "./Menu";

const App = () => {
  return (
    <Router>
      <nav>
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
