import React, { useEffect, useState } from "react";
import "./dateBlock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBlock() {
  const [dateBlock, setDateBlock] = useState({
    isMorning: false,
    isAfternoon: false,
    isEvening: false,
  });

  const [startDate, setStartDate] = useState(new Date());

  let morningIcon = dateBlock.isMorning ? "trueColor" : "falseColor";
  let afternoonIcon = dateBlock.isAfternoon ? "trueColor" : "falseColor";
  let eveningIcon = dateBlock.isEvening ? "trueColor" : "falseColor";

  //Use this to toggle time of day Boolean
  function toggleisMorning() {
    setDateBlock((dateBlock) => ({
      ...dateBlock,
      isMorning: !dateBlock.isMorning,
    }));
  }
  function toggleisAfternoon() {
    setDateBlock((dateBlock) => ({
      ...dateBlock,
      isAfternoon: !dateBlock.isAfternoon,
    }));
  }
  function toggleisEvening() {
    setDateBlock((dateBlock) => ({
      ...dateBlock,
      isEvening: !dateBlock.isEvening,
    }));
  }
  function selectAll(){
    setDateBlock((dateBlock) => ({
        ...dateBlock,
        isMorning: true,
        isAfternoon: true,
        isEvening: true
    }));
  }
  return (
    <div className="dateBlock">
       <DatePicker className="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} /> 
      <button className={`${morningIcon} dayPartButton`} onClick={toggleisMorning}>
        MORNING
      </button>
      <button className={`${afternoonIcon} dayPartButton`} onClick={toggleisAfternoon}>
        AFTERNOON
      </button>
      <button className={`${eveningIcon} dayPartButton`} onClick={toggleisEvening}>
        EVENING
      </button>
      <button className="dayPartButton selectAll" onClick={selectAll} >Select All</button>
    </div>
  );
}


