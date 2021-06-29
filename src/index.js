import React from "react";
import ReactDOM from "react-dom";

function tong(a, b) {
  return a + b;
}
const a = 20;
const b = 20;

const data = <div>total:{tong(a, b)}</div>;

ReactDOM.render(data, document.getElementById("root"));

// serviceWorker.unregister();
