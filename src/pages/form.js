import React from "react";
import DateBlock from "../components/dateBlock";
import "./form.css";
import Header from "../components/header";
import { Button } from "@mui/material";

function Form() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
  });

  //Use this to add additional dateBlock components
  const [thingsArray, setThingsArray] = React.useState([]);

  function addItem() {
    setThingsArray((prevThingsArray) => {
      return [...prevThingsArray, <DateBlock />];
    });
  }

  function deleteItem() {
    setThingsArray((prevThingsArray) => {
      return prevThingsArray.splice(1, 1);
    });
  }
  //Propably wont need this, but not sure, jk I do but idk why yet
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="form">
      <Header />
      <div>
        <input type="text" placeholder="Name" className="form--input" />
        <input type="text" placeholder="Phone #" className="form--input" />
      </div>
      <DateBlock />
      {thingsElements}
      <button onClick={addItem} className="addDate">
        Add Date
      </button>
      <button onClick={deleteItem} className="addDate">
        Remove Date
      </button>
      <Button variant="contained" disableElevation className="submitButton">
        Submit
      </Button>
    </div>
  );
}

export default Form;
