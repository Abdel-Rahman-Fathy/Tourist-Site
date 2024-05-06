import Navbar from "../../Components/Navbar";
import MainPages from "../main";
import Footer from "../../Components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs";
import ContactUsPage from "../ContactUs";
import FixedIcon from "../main/components/FixedIcon";
import { HomeContextProvider } from "./HomeContext";

function Layout() {
  return (
    <div>
      <HomeContextProvider>
        <Navbar />
        <div className="main-view">
          <Routes>
            <Route path="" element={<MainPages />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUsPage />} />
          </Routes>
          <FixedIcon />
        </div>
        <Footer />
      </HomeContextProvider>
    </div>
  );
}

export default Layout;
