import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import { imgPath } from "methods/img";
import { homeContext } from "pages/layout/HomeContext";
import { useContext, useEffect, useState } from "react";
function SliderAndTable() {
  const { homeData } = useContext(homeContext);
  const images = [
    ...(homeData?.sliders.map((item) => ({ url: imgPath(item.image) })) || []),
  ];
  const [sliderWidth, setSliderWidth] = useState("60%");
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSliderWidth("90%");
      } else {
        setSliderWidth("60%");
      }
    };

    handleResize(); // Set initial width on component mount

    window.addEventListener("resize", handleResize); // Update width on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);
  return (
    <>
      {" "}
      <Typography
        variant="h4"
        sx={{ textAlign: "center", py: 2, fontWeight: "600" }}
      >
        Cairo, Pyramids
      </Typography>
      {images.length > 0 ? (
        <Box sx={{ py: 3 }}>
          <SimpleImageSlider
            width={sliderWidth}
            height={"80vh"}
            images={images ? images : []}
            showBullets={false}
            showNavs={true}
            loop={true}
            autoPlay={true}
            slideDuration={1.5}
            autoPlayDelay={2}
          />
        </Box>
      ) : (
        "لا يوجد صور للعرض"
      )}
      <Stack>
        <Grid container>
          <Grid
            item
            xs={5}
            sx={{ p: 2, border: "solid 1px #DEE2E6", display: "flex" }}
          >
            <CreditCardIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">44$</Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              p: 2,
              border: "solid 1px #DEE2E6",
              display: "flex",
              borderLeft: "0px",
            }}
          >
            <GroupsIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">
              children from 6 to 12 years 22$
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              p: 2,
              border: "solid 1px #DEE2E6",
              display: "flex",
              borderTop: "0px",
            }}
          >
            <AccessTimeIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">Duration 22 hours</Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              p: 2,
              border: "solid 1px #DEE2E6",
              display: "flex",
              borderLeft: "0px",
              borderTop: "0px",
            }}
          >
            <LanguageIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">Daily</Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default SliderAndTable;
