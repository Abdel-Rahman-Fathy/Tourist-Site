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
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
import RenderRte from "Components/RenderRte";
import { useTranslation } from "react-i18next";
function BlogPage() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);

  return (
    <Stack sx={{ padding: "80px 30px" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 10,
          textTransform: "uppercase",
        }}
      >
        {t("main.Blog")}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {homeData?.blogs.map((item, index) => (
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
                    src={imgPath(item.image)}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      transition: "all .5s",
                    }}
                    alt={item.title}
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
                      fontSize: "17px",
                      fontWeight: 600,
                      "&:hover": {
                        letterSpacing: ".3px",
                      },
                      transition: "all .4s",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ py: 2 }}
                    className="limited-text"
                  >
                    {/* {data.title.length <= 18 ? data.title: (data.title.substr(0, 18) + "...")} */}
                    <RenderRte rte={"lorem10"} limit={true} />
                  </Typography>
                  <Button variant="outlined">READ MORE</Button>
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
