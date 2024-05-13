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
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { homeContext, useHomeData } from "pages/HomeContext";

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
                <i className="bi bi-facebook"></i>
              </NavLink>
              <NavLink to={homeData?.socialMedia[1].link || ""}>
                <i className="bi bi-youtube"></i>
              </NavLink>
              <NavLink to={homeData?.socialMedia[2].link || ""}>
                <i className="bi bi-instagram"></i>
              </NavLink>
              <i className="bi bi-tiktok"></i>
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
              placeholder="Password"
              variant="outlined"
              sx={{ color: "red", width: "80%" }}
            />
            <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
              {findObj("Newsletter")?.title}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Footer;
