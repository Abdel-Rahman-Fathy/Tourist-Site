import { Box, Grid, Stack, Typography } from "@mui/material";
import img from "../../assets/imgForm.jpg";
import { NavLink } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function CardRight() {
  return (
    <Grid item md={4} xs={12} mt={4}>
      <Stack sx={{ border: "solid 2px #EEE", py: "50px", px: "30px" }}>
        <Typography variant="h6" sx={{ pb: "15px", fontWeight: "700" }}>
          Blog
        </Typography>
        <Stack flexDirection={"row"} mb={2}>
          <img src={img} alt="" height={"70px"} width={"70px"} />
          <Box sx={{ ml: 3 }}>
            <Typography
              variant="body2"
              component={NavLink}
              to={""}
              sx={{ fontWeight: "700", fontSize: "15px" }}
            >
              Pyramids of Giza
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"}>
              <CalendarMonthIcon color="primary" sx={{ fontSize: "16px" }} />
              <Typography variant="body1">Nov 18 , 2022</Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default CardRight;
