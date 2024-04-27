import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
import { Box, Stack, Typography } from "@mui/material";
import contactUs2 from "../../assets/ContactUs2.jpg";
function ContactUsPage() {
  const [t] = useTranslation();

  return (
    <Stack>
      <FixedSection title={t("contactUs")} />
      <Box
        style={{
          backgroundImage: `url(${contactUs2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          padding: "100px 0px",
        }}
        sx={{ textAlign: "center", py: "50px" }}
      >
        <Typography variant="h6" sx={{ fontSize: "45px", fontWeight: 600 }}>
          CONTACT US
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "25px" }}>
          You will be answered
        </Typography>
      </Box>
    </Stack>
  );
}

export default ContactUsPage;
