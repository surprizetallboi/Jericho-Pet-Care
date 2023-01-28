import React, { useState } from "react";
import "./services.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Counter from "../components/counter";
import Header from "../components/header";

function Services() {
  const [dog, setDog] = useState(0);
  const [pup, setPup] = useState(0);
  const [cat, setCat] = useState(0);
  const [drop, setDrop] = useState(true);
  const [thirty, setThirty] = useState(true);

  let base = 0;
  if (drop && thirty && (pup || dog)) {
    base = 14;
  } else if (drop && !thirty && (pup || dog)) {
    base = 25;
  } else if (drop && thirty && cat) {
    base = 17;
  } else if (drop && !thirty && cat) {
    base = 28;
  } else if (!drop && thirty && (pup || dog)) {
    base = 16;
  } else if (!drop && !thirty && (pup || dog)) {
    base = 32;
  } else if (!dog && !pup && !cat) {
    base = 0;
  }

  const dropTotal = base + dog * 8 + pup * 12 + cat * 5;
  const walkTotal = base + dog * 10 + pup * 14;

  function changeDrop() {
    setDrop(!drop);
  }

  function changeThirty() {
    setThirty(!thirty);
  }

  function addDog() {
    setDog(dog + 1);
  }
  function subDog() {
    if (dog > 0) {
      setDog(dog - 1);
    }
  }

  function addPup() {
    setPup(pup + 1);
  }
  function subPup() {
    if (pup > 0) {
      setPup(pup - 1);
    }
  }

  function addCat() {
    setCat(cat + 1);
  }
  function subCat() {
    if (cat > 0) {
      setCat(cat - 1);
    }
  }

  function thirtySixty() {
    if (thirty){
      return "30"
    } else{
      return "60"
    }
  }

  function totalWalkDrop(){
    if(drop){
      return dropTotal
    } else{
      return walkTotal
    }
  }

  function dropWalk(){
    if(drop){
      return "Drop In"
    }else{
      return "Walk"
    }
  }

  return (
    <div className="services">
      <Header />
      <Helmet>
        <title>Jericho Pet Care | Services</title>
      </Helmet>
      <h1 className="priceTotal">${totalWalkDrop()} per {thirtySixty()} minute {dropWalk()}</h1>
      <div className="changeButtonS">
      <button className="changeButton" onClick={changeThirty}>30 / 60</button>
      <button className="changeButton i" onClick={changeDrop}>DROP IN / WALK</button>
      </div>
      {/* <h1 className={thirty ? "total" : "notTotal"}>30</h1>
      <h1 className={!thirty ? "total" : "notTotal"}>60</h1> */}
      <Counter petType="Dogs" value={dog} plus={addDog} minus={subDog} />
      <Counter petType="Puppies" value={pup} plus={addPup} minus={subPup} />
      <Counter petType="Cats" value={cat} plus={addCat} minus={subCat} />
      <Link to="/form">
        <Button variant="contained" disableElevation className="servicesButton">
          <h4>Request A Booking</h4>
        </Button>
      </Link>
    </div>
  );
}

export default Services;
