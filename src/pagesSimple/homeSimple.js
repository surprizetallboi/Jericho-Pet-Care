import React from "react";
import logo from "../logo.svg";
import "./homeSimple.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
// import Lauren from "/Users/tallboi/jericho-pet-care/src/lauren.png";
import MeetAndGreet from "../components/meetAndGreet";

export default function HomeSimple() {
  return (
    <div className="homeSimple">
      <Helmet><title>Jericho Pet Care | Home</title></Helmet>
      <img src={logo} className="logo" alt="logo" />
      <div className="arlington">Arlington, TX</div>
      <h1 className="largeText">DROP-IN VISITS</h1>
      <h2 className="smallText">Starting at $22</h2>
      <h1 className="largeText">DOG WALKING</h1>
      <h2 className="smallText">Starting at $26</h2>
      <Link to="/services">
        <button className="button-19" role="button">
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
          I have been a professional pet sitter since 2018. I now work four days a week at a spay/neuter clinic, and I am only able to schedule pet sitting appointments outside of my regular work hours.
          
        </h3>
      </div>
      <MeetAndGreet />
      <div className="br" />
    </div>
  );
}
