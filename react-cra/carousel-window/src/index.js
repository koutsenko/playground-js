import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from "./Components/Carousel/Carousel";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Carousel />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
