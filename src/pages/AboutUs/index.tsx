import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AboutUsImg from "../../assets/aboutUs.png";
import "./About.css";
import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
import RenderRtchText from "../../Components/RenderRte";
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
              <RenderRtchText rte="" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default AboutUs;
