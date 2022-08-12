import React from "react";
import "./counter.css";

export default function Counter(props) {
  const [value, setValue] = React.useState(0);
  console.log(value);

  function minus() {
    setValue((prevValue) => prevValue - 1);
  }

  function plus() {
    setValue((prevValue) => prevValue + 1);
  }
  return (
    <div className="counter">
       <h3 className="petType">Number of {props.petType}</h3>
       
      <button className="counter--minus" onClick={minus}>
        –
      </button>
      <div className="counter--count">
        <h1 className="counterValue">{value}</h1>
      </div>
      <button className="counter--plus" onClick={plus}>
        +
      </button>
      
    </div>
  );
}
