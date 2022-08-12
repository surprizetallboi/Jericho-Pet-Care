import React from "react";
import logo from "../logo.svg";
import "./home.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import About from "../components/about";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>DROP-IN VISITS</h1>
        <h2>Starting at $25</h2>
        <h1>DOG WALKING</h1>
        <h2>Starting at $32</h2>
        <Link to="/services">
          <Button variant="contained" disableElevation className="homeButton">
            <h2>LEARN MORE</h2>
          </Button>
        </Link>
        <div className="space" />
        <About />
      </header>
     
    </div>
  );
}
export default Home;
