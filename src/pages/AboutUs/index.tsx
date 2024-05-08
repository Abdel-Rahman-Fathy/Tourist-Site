import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AboutUsImg from "../../assets/aboutUs.png";
import "./About.css";
import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
import RenderRtchText from "../../Components/RenderRte";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "methods/api";
import { AboutType } from "types/About";
function AboutUs() {
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [aboutData, setAboutData] = useState<AboutType | undefined>(undefined);
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  function getAboutData() {
    setStatus("loading");
    axios
      .get<{ data: AboutType }>(api(`${language}/about`))
      .then(({ data }) => {
        console.log({ data });
        setStatus("done");
        setAboutData(data.data);
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("none");
      });
  }

  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <Stack>
      <FixedSection title={aboutData?.siteInformation?.about_title} />
      <Container maxWidth={"lg"} sx={{ py: "80px" }}>
        <Grid container>
          <Grid item md={6}>
            <Box sx={{ width: "440px" }}>
              <img src={aboutData?.metaImage} width={"100%"} alt="AboutUsImg" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {t("aboutUs")}
            </Typography>
            <Typography className="subAbout" variant="h5" sx={{ py: 3 }}>
              {aboutData?.siteInformation?.about}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgb(3, 14, 44)", fontWeight: "600" }}
            >
              {aboutData?.siteInformation.aboutMetaDescription}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default AboutUs;
