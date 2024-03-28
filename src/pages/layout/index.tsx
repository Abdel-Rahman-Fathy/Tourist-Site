import React from "react";
import Navbar from "../../Components/Navbar";
import MainPages from "../main";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="main-view">
        <MainPages />
      </div>
    </div>
  );
}

export default Layout;
