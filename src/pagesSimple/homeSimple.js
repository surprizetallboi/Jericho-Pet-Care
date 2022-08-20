import React from "react";
import logo from "../logo.svg";
import "./homeSimple.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import Lauren from "/Users/tallboi/jericho-pet-care/src/lauren.png";
import MeetAndGreet from "../components/meetAndGreet";

export default function HomeSimple() {
  return (
    <div className="homeSimple">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="largeText">DROP-IN VISITS</h1>
      <h2 className="smallText">Starting at $22</h2>
      <h1 className="largeText">DOG WALKING</h1>
      <h2 className="smallText">Starting at $26</h2>
      <Link to="/services">
        <button class="button-19" role="button">
          LEARN MORE
        </button>
      </Link>
      <div className="about">
        {/* <img className="lauren" src={Lauren} /> */}
        <h2 className="largeText">
          Hi! <br />
          My name is Lauren
        </h2>
        <h3 className="aboutText">
          Jericho Pet Care is my privately owned and insured pet sitting business founded in
          2020.
          <br/>
          I have been a professional pet sitter since 2018.
          <br />
          I’ve been a pet owner myself for many years, and I know how important
          it is to choose the right person to care for your pets. I am always
          willing and eager to meet more dogs and cats and provide loving,
          specialized care to each and every one!
        </h3>
      </div>
      <MeetAndGreet />
      <div className="br" />
    </div>
  );
}
