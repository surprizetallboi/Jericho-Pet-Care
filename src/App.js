import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";

import HomeSimple from "./pagesSimple/homeSimple";
import ServicesSimple from "./pagesSimple/servicesSimple";
import FormSimple from "./pagesSimple/formSimple";

// import Home from "./pages/home";
import Services from "./pages/services";
import Form from "./pages/form";

import Reviews from "./pages/reviews";

import Footer from "./components/footer";
// import Cert from "./cert";

function App() {
  return (
    <div className="background">
      <Container maxWidth="sm" className="mainAppRouter">
        <div>
          <Routes>
            <Route exact path="/" element={<HomeSimple />} />
            <Route exact path="/services" element={<ServicesSimple />} />
            <Route exact path="/services2" element={<Services />} />
            {/* <Route exact path="/form" element={<FormSimple/>} /> */}
            <Route exact path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
