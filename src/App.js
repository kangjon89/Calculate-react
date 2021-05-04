import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function addThem() {
    setTotal(number1 + number2);
  }
  function subtractThem() {
    setTotal(number1 - number2);
  }
  function multiplyThem() {
    setTotal(number1 * number2);
  }
  function divideThem() {
    setTotal(number1 / number2);
  }

  return (
    <div className="App">
      <h1>Calculate quick things</h1>
      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>
      <button onClick={addThem}>Add Them!</button> <br />
      <button onClick={subtractThem}>Subtract Them!</button> <br />
      <button onClick={multiplyThem}>Multiply Them!</button> <br />
      <button onClick={divideThem}>Divide Them!</button>
      <h2>Total = {total}</h2>
    </div>
  );
}

export default App;
