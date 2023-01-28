import React from "react";
import "./counter.css";

export default function Counter(props) {
  // const [value, setValue] = React.useState(0);
  // console.log(value);

  // function minus() {
  //   setValue((prevValue) => prevValue - 1);
  // }

  // function plus() {
  //   setValue((prevValue) => prevValue + 1);
  // }
  return (
    <div className="counter">
       <h3 className="petType">Number of {props.petType}</h3>
       
      <button className="counter--minus counterSymbol" onClick={props.minus}>
      <div className="minus">-</div>
      </button>
      <div className="counter--count">
        <h1 className="counterValue">{props.value}</h1>
      </div>
      <button className="counter--plus counterSymbol" onClick={props.plus}>
        <div className="plus">+</div>
      </button>
    </div>
  );
}
