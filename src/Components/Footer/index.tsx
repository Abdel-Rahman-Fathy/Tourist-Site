import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./footer.css";
import footer from "../../assets/FooterImg.png";
import { makeStyles } from "@mui/styles";
import { homeContext, useHomeData } from "pages/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      backgroundColor: "#3D4147", // Change this to whatever color you want
    },

    "& .MuiInputBase-input": {
      color: "#fff", // Change this to whatever color you want
    },
  },
});
function Footer() {
  const classes = useStyles();
  const { homeData } = useContext(homeContext);
  const findObj = useHomeData(homeData?.siteContent);

  return (
    <Stack bgcolor="primary.main" padding={"80px 0px 80px 0px"}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item md={6}>
            <Box component={"img"} src={footer} sx={{ width: "300px" }} />
            <Typography
              variant="h5"
              sx={{ color: "#fff", py: 3, fontWeight: "600" }}
            >
              {findObj("Footer")?.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", pb: 3, width: "88%" }}
            >
              {findObj("Footer")?.description}
            </Typography>
            <Box>
              <NavLink to={homeData?.socialMedia[0].link || ""}>
                <FontAwesomeIcon icon={faFacebook} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[1].link || ""}>
                <FontAwesomeIcon icon={faYoutube} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[2].link || ""}>
                <FontAwesomeIcon icon={faInstagram} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[3]?.link || ""}>
                <FontAwesomeIcon icon={faTiktok} className="icons" />
              </NavLink>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", py: 3, fontWeight: "600" }}
            >
              {findObj("Newsletter")?.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", pb: 3 }}>
              {findObj("Newsletter")?.description}
            </Typography>
            <TextField
              className={classes.root}
              placeholder="Email"
              variant="outlined"
              sx={{ color: "red", width: "80%" }}
            />
            <Button variant="contained" color="secondary" sx={{ m: 3 }}>
              {findObj("Newsletter")?.title}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Footer;
