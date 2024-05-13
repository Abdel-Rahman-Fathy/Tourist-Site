import Navbar from "../../Components/Navbar";
import MainPages from "../main";
import Footer from "../../Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "../AboutUs";
import ContactUsPage from "../ContactUs";
import FixedIcon from "../main/components/FixedIcon";
import { homeContext } from "../HomeContext";
import HurghadaCard from "pages/HurghadaCard";
import Blog from "pages/Blog";
import { useContext, useEffect } from "react";
import Spinner from "pages/SpinnerPage/Spinner";
import SliderHurhada from "pages/SliderPage";
import HotelCard from "pages/HotelCard";
import SliderHotel from "pages/HotelCard/SliderPage";
import ShopCard from "pages/ShoppingCard";
import { Stack, Typography } from "@mui/material";

function Layout() {
  const { status } = useContext(homeContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
              <Route path="hotels/:id" element={<HotelCard />} />
              <Route path="hotel/:id" element={<SliderHotel />} />
              <Route path="shopping/:id" element={<ShopCard />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="blog/:id" element={<Blog />} />
              <Route path="contact" element={<ContactUsPage />} />
              <Route
                path="*"
                element={
                  <Stack
                    sx={{
                      height: "100vh",
                      backgroundColor: "primary.main",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h4">لا يوجد </Typography>{" "}
                  </Stack>
                }
              />
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
