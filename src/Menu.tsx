import "./styles.css";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <p>Верстка</p>
      <Link to="/react/progress-bar">Прогресс-бар</Link>
      <br />
      <Link to="/react/draggable">Перетаскиваемый компонент</Link>
    </nav>
  );
};

export default Menu;
