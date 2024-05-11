import Navbar from "../../Components/Navbar";
import MainPages from "../main";
import Footer from "../../Components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs";
import ContactUsPage from "../ContactUs";
import FixedIcon from "../main/components/FixedIcon";
import { homeContext } from "../HomeContext";
import HurghadaCard from "pages/HurghadaCard";
import Blog from "pages/Blog";
import { useContext } from "react";
import Spinner from "pages/SpinnerPage/Spinner";
import SliderHurhada from "pages/SliderPage";
import HotelCard from "pages/HotelCard";

function Layout() {
  const { status } = useContext(homeContext);
  return (
    <>
      {status === "done" ? (
        <div>
          <Navbar />
          <div className="main-view">
            <Routes>
              <Route path="" element={<MainPages />} />
              <Route path="products/:id" element={<HurghadaCard />} />
              <Route path="product/:id" element={<SliderHurhada />} />
              <Route path="hotel/:id" element={<HotelCard />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="blog/:id" element={<Blog />} />
              <Route path="contact" element={<ContactUsPage />} />
            </Routes>
            <FixedIcon />
          </div>
          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Layout;
