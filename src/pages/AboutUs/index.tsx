import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AboutUsImg from "../../assets/aboutUs.png";
import "./About.css";
import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
function AboutUs() {
  const [t] = useTranslation();
  return (
    <Stack>
      <FixedSection title={t("aboutUs")} />
      <Container maxWidth={"lg"} sx={{ py: "80px" }}>
        <Grid container>
          <Grid item md={6}>
            <Box sx={{ width: "440px" }}>
              <img src={AboutUsImg} width={"100%"} alt="AboutUsImg" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {t("aboutUs")}
            </Typography>
            <Typography className="subAbout" variant="h5" sx={{ py: 3 }}>
              {t("WhoWeAre")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgb(3, 14, 44)", fontWeight: "600" }}
            >
              We have well-trained professionals who are able to perform the
              services of organizing and booking all trips and providing all the
              means for your convenience. We are ready to assist you every step
              of your journey to ensure that you get maximum pleasure and the
              best service. We provide first class personal service to all of
              our clients from the initial inquiry stages through to the
              completion of the tour. We are honest and transparent in all our
              dealings with customers. We look forward to providing the best
              services to our customers with the best quality and providing an
              unforgettable experience. We always provide you with the best
              prices with our commitment to provide the best programs.
              <br />
              <br />
              We can deliver to your hotel anything you want to buy from
              Hurghada with a competitive price{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default AboutUs;
