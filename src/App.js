import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbarmenu } from "./components/Navbarmenu";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Careers } from "./Pages/Careers";
import { Services } from "./Pages/Services";
import { Copyright } from "./components/CopyRight";
import { ContactUs } from "./Pages/ContactUs";
import { Staffing } from "./Pages/Staffing";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Navbarmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact-Us" element={<ContactUs />} />
        <Route path="Staffing" element={<Staffing />} />
      </Routes>
      <Copyright />
    </BrowserRouter>
  );
};
