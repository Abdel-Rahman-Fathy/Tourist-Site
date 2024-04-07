import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import aboutImg from "../../../../assets/WhyUsImage.png";
import { useTranslation } from "react-i18next";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
const IconBox = [
  {
    id: 1,
    title: "Our policy",
    text: `Providing a first class personal service to all our clientsfrom the initial inquiry stages through to the completion ofthe tour`,
    icon: VisibilityOffIcon,
  },
  {
    id: 2,
    title: "Our values",
    text: "To be honest and transparent in all our dealings with customers",
    icon: BrightnessHighIcon,
  },
  {
    id: 3,
    title: "Our goal",
    text: "We look forward to providing the best services to our customers with the best quality and providing an unforgettable experience.",
    icon: ModeStandbyIcon,
  },
];
function WhyusPage() {
  const [t, i18n] = useTranslation();
  return (
    <Stack sx={{ padding: "80px 30px" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 600, marginTop: 3 }}>
                WHY US ?
              </Typography>
              <Typography variant="body1" sx={{ py: 2 }}>
                Because we are working to provide distinguished service to our
                customers through
              </Typography>
            </Box>
            {IconBox.map((item) => (
              <Box
                display={"flex"}
                flexDirection={"row"}
                key={item.id}
                columnGap={2}
                marginBottom={4}
              >
                <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                  <item.icon sx={{ fontSize: "60pX", color: "#fff" }} />
                </Box>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">{item.text}</Typography>
                </Box>
              </Box>
            ))}
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
              <Box sx={{ border: "solid 10px black" }}>
                <img
                  src={aboutImg}
                  alt=""
                  width="600px"
                  style={{ position: "relative", top: "30px", right: "30px" }}
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
