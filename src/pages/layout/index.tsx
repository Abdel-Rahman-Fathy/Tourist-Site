import React from "react";
import Navbar from "../../Components/Navbar";
import MainPages from "../main";
import NavbarContainers from "../../Components/navbars-container/NavbarsContainer";
import Footer from "../../Components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* <NavbarContainers /> */}
      <div className="main-view">
        <Routes>
          <Route path="" element={<MainPages />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
