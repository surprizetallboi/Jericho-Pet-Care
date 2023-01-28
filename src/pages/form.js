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

  function handleChange(event) {
    setContact((prevContact) => {
      return {
        ...prevContact,
        [event.target.name]: event.target.value,
      };
    });
  }

  //Use this to add additional dateBlock components
  const [thingsArray, setThingsArray] = React.useState([]);

  function addItem() {
    setThingsArray((prevThingsArray) => {
      return [...prevThingsArray, <DateBlock />];
    });
  }
  // if shit breaks later put (prevThingsArray) back on, but otherwise I think I dont need them
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
        <input
          type="text"
          placeholder="firstName"
          className="form--input"
          onChange={handleChange}
          name="firstName"
          value={contact.firstName}
        />
        <input
          type="text"
          placeholder="lastName"
          className="form--input"
          onChange={handleChange}
          name="lastName"
          value={contact.lastName}
        />
        <input
          type="text"
          placeholder="phone"
          className="form--input"
          onChange={handleChange}
          name="phone"
          value={contact.phone}
        />
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
