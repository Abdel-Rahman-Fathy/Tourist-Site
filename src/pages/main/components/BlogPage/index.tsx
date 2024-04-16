import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import img1 from "../../../../assets/pram.webp";
import { NavLink } from "react-router-dom";
function BlogPage() {
  const array1 = Array.from({ length: 5 });
  return (
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
              <Card variant="outlined">
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <img
                    src={img1}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      transition: "all .5s",
                    }}
                    alt=""
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#fff",
                      display: "inline-block",
                      width: "80px",
                      padding: "10px",
                      textAlign: "center",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    18 Nov
                  </Typography>
                </Box>

                <CardContent>
                  <Typography
                    variant="h6"
                    // component={NavLink}
                    // to="#"
                    sx={{
                      fontWeight: 600,
                      "&:hover": {
                        letterSpacing: ".3px",
                      },
                      transition: "all .4s",
                    }}
                  >
                    Pyramids of Giza
                  </Typography>
                  <Typography variant="body1" sx={{ py: 2 }}>
                    Archeologists have spent many centuries wondering about the
                    glory of...
                  </Typography>
                  <Typography variant="button">READ MORE</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default BlogPage;
