import React from "react";
import "./services.css";
import Header from "../components/header";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Counter from "../components/counter"

function Services() {
  return (
    <div className="services">
        <Header />
        <Counter petType="Dogs" />
        <Counter petType="Puppies" />
        <Counter petType="Cats" />

    <Link to='/form'><Button
            variant="contained"
            disableElevation
            className="servicesButton"
            >
          <h4>Request A Booking</h4>
        </Button>
        </Link>

    </div>
  );
}

export default Services;
