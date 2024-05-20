import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import bgAnimated from "../../../../assets/animatedNumberImage.png";
import AnimatedNumber from "react-animated-numbers";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PersonIcon from "@mui/icons-material/Person";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
const archievmentsList = [
  {
    postfix: "+",
    value: "15",
    matric: "Projects",
    Icon: CheckBoxIcon,
    title: "Employee",
  },
  {
    prefix: "~",
    value: "100,000",
    matric: "Users",
    Icon: PersonIcon,
    title: "Happy clients",
  },
  {
    matric: "Years",
    value: "1",
    Icon: ThumbsUpDownIcon,
    title: "Years of Experience",
  },
  {
    matric: "Years",
    value: "10",
    Icon: ThumbUpAltIcon,
    title: "Customer reviews",
  },
];
function AnimationNumber() {
  return (
    <Stack
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 82, 164, 0.8), rgba(0, 82, 164, 0.8)
), url(${bgAnimated})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "50px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          {archievmentsList.map((arch, index) => (
            <Grid
              key={index}
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#FFF",
                marginY: 3,
              }}
            >
              <arch.Icon sx={{ fontSize: "50px" }} />
              <Typography>
                <AnimatedNumber
                  includeComma
                  animateToNumber={parseInt(arch.value)}
                  locale="en-US"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.8,
                  })}
                  fontStyle={{
                    fontSize: 50,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    color: "#fff",
                  }}
                />
              </Typography>
              <Typography variant="body1" color={"#fff"}>
                {arch.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default AnimationNumber;
