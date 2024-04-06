import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../../../assets/slider/img1.jpg";
import image2 from "../../../../assets/slider/img2.jpg";
import image3 from "../../../../assets/slider/img3.jpg";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];
function Slider() {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"100vh"}
        images={images}
        showBullets={false}
        showNavs={true}
        loop={true}
        autoPlay={true}
        slideDuration={1.5}
        autoPlayDelay={2}
      />
    </div>
  );
}

export default Slider;
