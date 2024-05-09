import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import contactUs2 from "../../assets/ContactUs2.jpg";
import { NavLink } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FormPage from "./FormPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "methods/api";
import { ContactType } from "types/Contact";
import Spinner from "pages/SpinnerPage/Spinner";

function ContactUsPage() {
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [contactData, setContactData] = useState<ContactType | undefined>(
    undefined
  );
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  function getAboutData() {
    setStatus("loading");
    axios
      .get<{ data: ContactType }>(api(`contact`))
      .then(({ data }) => {
        console.log({ data });
        setStatus("done");
        setContactData(data.data);
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
    <>
      {status === "done" ? (
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
              pb: "150px",
            }}
          >
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "45px", fontWeight: 600 }}
              >
                {contactData?.siteContent[17].title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "25px" }}>
                {contactData?.siteContent[17].description}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bottom: 0,
                mt: "-150px",
                transform: "translateY(200px)",
              }}
            >
              <Grid container sx={{ bgcolor: "#fff", width: "80%" }}>
                <Grid item md={4} xs={12} sx={{ py: 8 }}>
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
                    {contactData?.siteInformation.address}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12} sx={{ py: 8 }}>
                  <PhoneAndroidOutlinedIcon
                    sx={{ fontSize: "60px", color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Phone
                  </Typography>
                  {contactData?.siteInformation?.phone1 && (
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      component={NavLink}
                      to={""}
                      sx={{ fontWeight: 500, mb: 2, px: 3 }}
                    >
                      {contactData?.siteInformation?.phone1}
                    </Typography>
                  )}
                  {contactData?.siteInformation?.phone2 && (
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      component={NavLink}
                      to={""}
                      sx={{ fontWeight: 500, mb: 2, px: 3 }}
                    >
                      {contactData?.siteInformation?.phone2}
                    </Typography>
                  )}
                  {contactData?.siteInformation?.phone3 && (
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      component={NavLink}
                      to={""}
                      sx={{ fontWeight: 500, mb: 2, px: 3 }}
                    >
                      {contactData?.siteInformation?.phone3}
                    </Typography>
                  )}
                  {contactData?.siteInformation?.phone4 && (
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      component={NavLink}
                      to={""}
                      sx={{ fontWeight: 500, mb: 2, px: 3 }}
                    >
                      {contactData?.siteInformation?.phone4}
                    </Typography>
                  )}
                </Grid>
                <Grid item md={4} xs={12} sx={{ py: 8 }}>
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
                    {contactData?.siteInformation?.email}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <FormPage />
        </Stack>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ContactUsPage;
