import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import aboutImg from "../../../../assets/about.png";
import { useTranslation } from "react-i18next";
import SquareIcon from "@mui/icons-material/Square";
import { useContext } from "react";
import { homeContext } from "pages/layout/HomeContext";
import RenderRte from "Components/RenderRte";
function SquuareTypeo({ title }: PropsType) {
  return (
    <Box display={"flex"} flexDirection={"row"} marginBottom={2} gap={1}>
      <SquareIcon sx={{ color: "#DDD" }} />
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
}
function AboutPage() {
  const [t] = useTranslation();

  const { homeData } = useContext(homeContext);

  return (
    <Stack sx={{ padding: "80px 30px" }}>
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              width: { md: "450px", xs: "350px" },
            }}
            src={aboutImg}
          />
        </Grid>
        <Grid item md={5} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography sx={{ fontWeight: 600, marginTop: 3 }}>
              <RenderRte rte={homeData?.siteInformation?.about_title} />
            </Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              {homeData?.siteInformation?.about_description}
            </Typography>
            <SquuareTypeo title="Distinction" />
            <SquuareTypeo title="Distinction" />
            <SquuareTypeo title="Distinction" />
            <Box
              sx={{
                borderTop: "3px solid #EEE",
                borderBottom: "3px solid #EEE",
              }}
            >
              <Typography
                sx={{
                  fontSize: "140px",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                14
              </Typography>
              <Typography
                variant="body1"
                sx={{ position: "relative", bottom: "50px", left: "15px" }}
              >
                years of experience
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

type PropsType = {
  title: string;
};
export default AboutPage;
