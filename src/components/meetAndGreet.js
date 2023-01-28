import React from "react";
import "./meetAndGreet.css";

export default function MeetAndGreet() {
  return (
    <div className="meetAndGreet">
      <div className="MAGLargeText">Ask about my weekend availability</div>
      <h2 className="MAGSmallText">Booking a meet & greet is free</h2>
      <div className="mamaTried">
      <div className="largeText">Text:</div></div>
      <a href="tel:+1-682-583-4058" className="phoneNum">
        <button className="button-1">
          682-583-4058
        </button>
      </a>
    </div>
  );
}
