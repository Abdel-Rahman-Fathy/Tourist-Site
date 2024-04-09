import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import man from "../../../../assets/manImage.jpg";
function ImportPage() {
  return (
    <Stack sx={{ margin: "20px 0px", backgroundColor: "primary.main" }}>
      <Box>
        <Grid container>
          <Grid item md={6} p={6}>
            <Typography
              sx={{ color: "#fff", fontWeight: 600, fontSize: "30px", pr: 5 }}
            >
              ONE OF OUR MOST IMPORTANT PRINCIPLES
              <br />
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 600, fontSize: "16px", py: 2 }}
            >
              the quality
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              - We always provide you with the best price to organise the best
              program <br />- We also can deliver to your hotel anything you
              want to buy from Hurghada
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ display: { md: "block", xs: "none" } }}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src={man}
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default ImportPage;
