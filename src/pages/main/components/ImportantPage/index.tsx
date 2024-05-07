import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import man from "../../../../assets/manImage.jpg";
import { homeContext } from "pages/layout/HomeContext";
import { useContext } from "react";
import RenderRte from "Components/RenderRte";
function ImportPage() {
  const { homeData } = useContext(homeContext);
  return (
    <Stack sx={{ margin: "20px 0px", backgroundColor: "primary.main" }}>
      <Box>
        <Grid container>
          <Grid item md={6} p={6}>
            <Typography
              sx={{ color: "#fff", fontWeight: 600, fontSize: "30px", pr: 5 }}
            >
              <RenderRte rte={homeData?.siteContent[13].description} />
              <br />
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 600, fontSize: "16px", py: 2 }}
            >
              <RenderRte rte={homeData?.siteContent[14].description} />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              <RenderRte rte={homeData?.siteContent[15].description} />
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
