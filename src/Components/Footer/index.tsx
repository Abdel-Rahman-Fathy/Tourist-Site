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
              About Egyptos travel
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", pb: 3, width: "88%" }}
            >
              We have well-trained professionals who are able to perform the
              services of organizing and booking travel and providing all the
              means for your convenience. We are ready to assist you every step
              of your journey to ensure that you get maximum pleasure and the
              best service.
            </Typography>
            <Box>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-tiktok"></i>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", py: 3, fontWeight: "600" }}
            >
              subscribe now
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", pb: 3 }}>
              Contact us to reach all new
            </Typography>
            <TextField
              className={classes.root}
              placeholder="Password"
              variant="outlined"
              sx={{ color: "red", width: "80%" }}
            />
            <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Footer;
