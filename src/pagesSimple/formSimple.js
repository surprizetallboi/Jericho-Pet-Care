import React from "react";
import Header from "../components/header";
import { Helmet } from "react-helmet";

export default function FormSimple() {
  return (
    <div className="form">
      <Header />
      <Helmet>
        <tile>Jericho Pet Care | Form</tile>
      </Helmet>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdSPM_BpaXVLf3JBhCWtAH5NIRvp7FQuG3QzOSwNpswgJzXag/viewform?embedded=true"
        width="640"
        height="3125"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
