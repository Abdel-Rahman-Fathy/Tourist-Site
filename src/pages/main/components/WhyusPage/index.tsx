import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import aboutImg from "../../../../assets/WhyUsImage.png";
import { useTranslation } from "react-i18next";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import { useContext } from "react";
import { homeContext } from "pages/layout/HomeContext";
import RenderRte from "Components/RenderRte";

function WhyusPage() {
  const [t, i18n] = useTranslation();
  const { homeData } = useContext(homeContext);

  return (
    <Stack sx={{ padding: "80px 30px" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 600, marginTop: 3 }}>
                <RenderRte rte={homeData?.siteContent[5]?.title} />
              </Typography>
              <Typography variant="body1" sx={{ py: 2 }}>
                <RenderRte rte={homeData?.siteContent[5]?.description} />
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
              marginBottom={4}
            >
              <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                <VisibilityOffIcon sx={{ fontSize: "60pX", color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h6">
                  {homeData?.siteContent[6]?.title}
                </Typography>
                <Typography variant="body1">
                  {homeData?.siteContent[6]?.description}
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
              marginBottom={4}
            >
              <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                <BrightnessHighIcon sx={{ fontSize: "60pX", color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h6">
                  {homeData?.siteContent[7]?.title}
                </Typography>
                <Typography variant="body1">
                  {homeData?.siteContent[7]?.description}
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
              marginBottom={4}
            >
              <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                <ModeStandbyIcon sx={{ fontSize: "60pX", color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h6">
                  {homeData?.siteContent[8]?.title}
                </Typography>
                <Typography variant="body1">
                  {homeData?.siteContent[8]?.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Box sx={{ p: 4 }}>
              <Box sx={{ border: "solid 10px #0052a4" }}>
                <Box
                  component="img"
                  sx={{
                    width: { md: "600px", xs: "250px" },
                    position: "relative",
                    top: "30px",
                    right: "30px",
                  }}
                  src={aboutImg}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default WhyusPage;
