import "./styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <p>Верстка</p>
      <Link to="/react/progress-bar">Прогресс-бар</Link>
    </nav>
  );
};

export { Menu };
