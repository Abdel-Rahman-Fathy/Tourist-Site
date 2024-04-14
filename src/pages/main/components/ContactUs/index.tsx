import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import contactUs from "../../../../assets/ContactUs.jpg";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function ContactUs() {
  return (
    <Stack
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0,.2), rgba(0, 0, 0,.2)
), url(${contactUs})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0px",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  paddingBottom: "20px",
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Conatact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", textAlign: "right", width: "70%" }}
              >
                You will be answered
              </Typography>
            </motion.div>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CallOutlinedIcon sx={{ color: "#fff", fontSize: "2.4rem" }} />
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  alignSelf: "center",
                  marginLeft: 5,
                }}
              >
                Call Us
              </Typography>
            </Box>
            <Box sx={{ margin: "10px 0 0 20px" }}>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                +20 100 492 04 73
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                +20 100 944 30 73
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <EmailOutlinedIcon sx={{ color: "#fff", fontSize: "2.4rem" }} />
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  alignSelf: "center",
                  marginLeft: 5,
                }}
              >
                Call Us
              </Typography>
            </Box>
            <Box sx={{ margin: "10px 0 0 20px" }}>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                info@Egyptos-Travel.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default ContactUs;
