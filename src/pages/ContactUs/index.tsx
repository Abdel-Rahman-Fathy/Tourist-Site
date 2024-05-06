import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import contactUs2 from "../../assets/ContactUs2.jpg";
import { NavLink } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FormPage from "./FormPage";

function ContactUsPage() {
  const [t] = useTranslation();

  return (
    <Stack>
      <FixedSection title={t("contactUs")} />
      <Box
        sx={{
          backgroundImage: `url(${contactUs2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          padding: "100px 0px 200px 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ fontSize: "45px", fontWeight: 600 }}>
            CONTACT US
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "25px" }}>
            You will be answered
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            transform: { md: "translateY(30%)", xs: "translateY(75%)" },
          }}
        >
          <Grid container sx={{ bgcolor: "#fff", width: "80%" }}>
            <Grid item md={4} sx={{ py: 8 }}>
              <LocationOnOutlinedIcon
                sx={{ fontSize: "60px", color: "primary.main", mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Address
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                component={NavLink}
                to={""}
                sx={{ fontWeight: 500, mb: 2, px: 3 }}
              >
                CAPITAL BUSINESS PARK - EL SHEIKH ZAYED, GIZA, EGYPT
              </Typography>
            </Grid>
            <Grid item md={4} sx={{ py: 8 }}>
              <PhoneAndroidOutlinedIcon
                sx={{ fontSize: "60px", color: "primary.main", mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Phone
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                component={NavLink}
                to={""}
                sx={{ fontWeight: 500, mb: 2, px: 3 }}
              >
                +20 100 492 04 73
              </Typography>
            </Grid>
            <Grid item md={4} sx={{ py: 8 }}>
              <EmailOutlinedIcon
                sx={{ fontSize: "60px", color: "primary.main", mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Email
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                component={NavLink}
                to={""}
                sx={{ fontWeight: 500, mb: 2, px: 3 }}
              >
                INFO@EGYPTOS-TRAVEL.COM
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FormPage />
    </Stack>
  );
}

export default ContactUsPage;
