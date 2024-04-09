import AboutPage from "./components/AboutPage";
import AnimationNumber from "./components/AnimatedNumber";
import BlogPage from "./components/BlogPage";
import FixedIcon from "./components/FixedIcon";
import HurghadaPage from "./components/HurghadaPage";
import ImportPage from "./components/ImportantPage";
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
      <ImportPage />
      <BlogPage />
    </>
  );
}

export default MainPages;
