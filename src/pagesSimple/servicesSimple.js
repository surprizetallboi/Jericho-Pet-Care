import React from "react";
import Header from "../components/header";
import "./servicesSimple.css";
import MeetAndGreet from "../components/meetAndGreet";

export default function ServicesSimple() {
  return (
    <div className="services">
      <Header />
      <div className="title">Services</div>

      <h1 className="servicesLargeText">DROP-IN VISITS</h1>
      <h2 className="servicesSmallText">
        Drop-in visits for dogs and cats include:
      </h2>
      <ul className="list">
        <li>Letting dogs out into fenced yard for potty and playtime</li>
        <li>Feeding and providing fresh water</li>
        <li>Indoor playtime and relaxing</li>
        <li>Litter box cleaning</li>
        <li>Administering medication, if needed</li>
      </ul>
      <br />
      <h2 className="servicesSmallText">Starting at $22 for 30 minutes</h2>
      <h2 className="servicesSmallText">Starting at $33 for 60 minutes</h2>
      <ul className="serviceAddOns">
        <li>Puppy rate: $26/$37 per visit</li>
        <li>Additional dog rate: +$8 per visit</li>
        <li>Additional cat rate: +$5 per visit</li>
        <li>Additional puppy rate: +$12 per visit</li>
        <li>Holiday rates may vary</li>
      </ul>

      <div className="line" />

      <h1 className="servicesLargeText">DOG WALKING</h1>
      <h2 className="servicesSmallText">Dog walks include:</h2>
      <ul className="list">
        <li>An on-leash walk around the neighborhood</li>
        <li>Feeding and providing fresh water</li>
        <li>Indoor playtime and relaxing</li>
        <li>Administering medication, if needed</li>
      </ul>
      <br />
      <h2 className="servicesSmallText">Starting at $26 for 30 minutes</h2>
      <h2 className="servicesSmallText">Starting at $42 for 60 minutes</h2>
      <ul className="serviceAddOns">
        <li>Puppy rate: $30/$46 per visit</li>
        <li>Additional dog rate: +$10 per walk</li>
        <li>Additional puppy rate: +$14 per walk</li>
        <li>Holiday rates may vary</li>
      </ul>
      <div className="line" />
      <MeetAndGreet />
      {/* <div className="servicesLargeText">ASK ABOUT MY AVAILABILITY</div>
      <h2 className="servicesSmallText">Booking a meet & greet is free</h2>
      <a href="tel:+1-682-248-1823" className='socialMedia'>
        <button class="button-1" role="button">
     682-248-1823
        </button>
        </a> */}

      <div className="br" />
    </div>
  );
}
