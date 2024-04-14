import React from "react";
import Navbar from "../../Components/Navbar";
import MainPages from "../main";
import NavbarContainers from "../../Components/navbars-container/NavbarsContainer";
import Footer from "../../Components/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* <NavbarContainers /> */}
      <div className="main-view">
        <MainPages />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
