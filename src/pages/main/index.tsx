import AboutPage from "./components/AboutPage";
import AnimationNumber from "./components/AnimatedNumber";
import FixedIcon from "./components/FixedIcon";
import HurghadaPage from "./components/HurghadaPage";
import ShoppingPage from "./components/Shopping";
import Slider from "./components/SliderPage";
import WhyusPage from "./components/WhyusPage";

function MainPages() {
  return (
    <>
      <Slider />
      <FixedIcon />
      <HurghadaPage />
      <ShoppingPage />
      <AboutPage />
      <AnimationNumber />
      <WhyusPage />
    </>
  );
}

export default MainPages;
