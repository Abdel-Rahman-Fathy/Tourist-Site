import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FixedSection from "../../Components/FixedSection";
import img1 from "../../assets/WhyUsImage.png";
import { NavLink, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { BorderBottom } from "@mui/icons-material";
function HurghadaCard() {
  const array1 = Array.from({ length: 5 });
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <FixedSection title="Excursions From Hurghada" />
      <Stack sx={{ padding: "80px 30px" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 600, mb: 10 }}
        >
          Blog
        </Typography>
        <Container>
          <Grid container spacing={2}>
            {array1.map((card, index) => (
              <Grid item md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    border: "2px solid",
                    borderRadius: "10px",
                    "&:hover .line": {
                      width: 1,
                    },
                  }}
                >
                  <Stack sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        overflow: "hidden",
                        "&:hover img": {
                          transform: "scale(1.1)",
                          height: "250px",
                        },
                      }}
                    >
                      <img
                        src={img1}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "all .5s",
                        }}
                        alt=""
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "#fff",
                        textAlign: "center",
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        fontWeight: "700",
                        p: "3px 20px",
                        transform: "translateY(50%) translateX(-50%)",
                        borderRadius: "10px",
                      }}
                    >
                      18 $
                    </Typography>
                  </Stack>

                  <CardContent>
                    <Typography
                      variant="h6"
                      component={NavLink}
                      to="#"
                      sx={{
                        fontWeight: 700,
                        marginY: 1,
                        display: "inline-block",
                      }}
                    >
                      Pyramids of Giza
                    </Typography>
                    <Box
                      color={"warning.main"}
                      sx={{
                        borderBottom: "dashed 1px #000",
                        pb: 2,
                      }}
                    >
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </Box>
                    <Typography variant="body1" sx={{ py: 2 }}>
                      Archeologists have spent many centuries wondering about
                      the glory of...
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: "rgba(40, 140, 160)",
                          transition: "all .3s",
                          "&:hover": {
                            backgroundColor: "rgb(19, 113, 160)",
                          },
                        }}
                      >
                        READ MORE
                      </Button>
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      width: 0,
                      height: "5px",
                      backgroundColor: "rgba(40, 140, 160)",
                      transition: "all .8s",
                    }}
                    className={"line"}
                  ></Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default HurghadaCard;
