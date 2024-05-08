import SimpleImageSlider from "react-simple-image-slider";

import { useContext } from "react";
import { homeContext } from "pages/layout/HomeContext";
import { imgPath } from "methods/img";
function Slider() {
  const { homeData } = useContext(homeContext);
  const images = [
    ...(homeData?.sliders.map((item) => ({ url: imgPath(item.image) })) || []),
  ];

  console.log(images);
  return (
    <>
      {images.length > 0 ? (
        <div>
          <SimpleImageSlider
            width={"100%"}
            height={"100vh"}
            images={images ? images : []}
            showBullets={false}
            showNavs={true}
            loop={true}
            autoPlay={true}
            slideDuration={1.5}
            autoPlayDelay={2}
          />
        </div>
      ) : (
        "لا يوجد صور للعرض"
      )}
    </>
  );
}

export default Slider;
