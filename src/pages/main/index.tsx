import { useContext } from "react";
import AboutPage from "./components/AboutPage";
import AnimationNumber from "./components/AnimatedNumber";
import BlogPage from "./components/BlogPage";
import ContactUs from "./components/ContactUs";
import HurghadaPage from "./components/HurghadaPage";
import ImportPage from "./components/ImportantPage";
import ShoppingPage from "./components/Shopping";
import Slider from "./components/SliderPage";
import WhyusPage from "./components/WhyusPage";
import { homeContext } from "pages/HomeContext";
import SliderLogo from "./components/SliderLogo";

function MainPages() {
  return (
    <>
      <Slider />
      <HurghadaPage />
      <ShoppingPage />
      <AboutPage />
      <AnimationNumber />
      <WhyusPage />
      <ImportPage />
      <BlogPage />
      <SliderLogo />
      <ContactUs />
    </>
  );
}

export default MainPages;
