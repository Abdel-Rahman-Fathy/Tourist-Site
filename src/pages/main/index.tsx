import AboutPage from "./components/AboutPage";
import FixedIcon from "./components/FixedIcon";
import HurghadaPage from "./components/HurghadaPage";
import ShoppingPage from "./components/Shopping";
import Slider from "./components/SliderPage";

function MainPages() {
  return (
    <div>
      <Slider />
      <FixedIcon />
      <HurghadaPage />
      <ShoppingPage />
      <AboutPage />
    </div>
  );
}

export default MainPages;
