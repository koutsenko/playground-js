import React from "react";
import ReactDOM from "react-dom";
import RedBox from "redbox-react";

const Page4 = () => {
  if (Math.random() > 0.5) {
    throw new Error('Hello redbox');
  }

  return (
    <div>
      <p>Page 4, sometimes show redbox error</p>
    </div>
  );
};
const root = document.getElementById("container");

try {
  ReactDOM.render(<Page4 />, root);
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, root);
}

