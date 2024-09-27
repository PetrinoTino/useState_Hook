import React, { useState } from "react";
function App() {
  const [count, setCount] = React.useState(0);
  // console.log(state[0]);

  // const [red, green, blue] = [9, 132, 227];
  // console.log(blue);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;
