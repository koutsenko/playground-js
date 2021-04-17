import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

const Page3 = () => (
  <div>
    <p>Page 3 with MUI button and Roboto font</p>
    <Button variant="contained" color="primary">
      MUI button
    </Button>
  </div>
);
const root = document.getElementById("container");

ReactDOM.render(<Page3 />, root);
