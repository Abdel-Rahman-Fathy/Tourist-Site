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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { BorderBottom } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "methods/api";
import { HardProductsType } from "types/HardProducts";
import RenderRte from "Components/RenderRte";
import Spinner from "pages/SpinnerPage/Spinner";
import { imgPath } from "methods/img";
import { HotelCardType } from "types/Hotel";
function HotelCard() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [products, setProducts] = useState<HotelCardType | undefined>(
    undefined
  );

  function getProductsData() {
    setStatus("loading");
    //
    axios
      .get<{ data: HotelCardType }>(api(`hotels/${id}`))
      .then(({ data }) => {
        setStatus("done");
        setProducts(data.data);
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("none");
      });
  }

  useEffect(() => {
    getProductsData();
  }, [id]);
  return (
    <>
      {status == "done" ? (
        <>
          <FixedSection title={t("main.Hotels")} />
          <Stack sx={{ padding: "80px 30px" }}>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 600, mb: 10 }}
            >
              {/* {products?.category} */}
            </Typography>
            <Container>
              <Grid container spacing={2}>
                {products?.hotels?.map((card, index) => (
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
                            src={imgPath(card?.metaImage[0].image)}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "all .5s",
                            }}
                            alt=""
                          />
                        </Box>
                        {/* <Typography
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
                    </Typography> */}
                      </Stack>

                      <CardContent>
                        <Typography
                          variant="h6"
                          component={NavLink}
                          to="#"
                          sx={{
                            fontWeight: 700,
                            marginY: 0.5,
                            display: "inline-block",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 1,
                          }}
                        >
                          {Array.from({ length: card.stars }, (_, i) => (
                            <StarIcon
                              key={i}
                              sx={{ color: "warning.main", fontSize: 20 }}
                            />
                          ))}
                        </Box>
                        <Typography variant="body1" sx={{ py: 1 }}>
                          {card.stars} {t("Hotel.Stars")}
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
                            onClick={() => {
                              navigate(`/hotel/${card.id}`);
                            }}
                          >
                            {t("main.ReadMore")}
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
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default HotelCard;
