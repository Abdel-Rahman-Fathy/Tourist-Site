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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "methods/api";
import { HardProductsType } from "types/HardProducts";
import RenderRte from "Components/RenderRte";
import Spinner from "pages/SpinnerPage/Spinner";
import { imgPath } from "methods/img";
import "./main.css";
function HurghadaCard() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [products, setProducts] = useState<HardProductsType | undefined>(
    undefined
  );
  function getProductsData() {
    setStatus("loading");
    //
    axios
      .get<{ data: HardProductsType }>(api(`products/${id}`))
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
          <FixedSection title={t("main.ExursionsFromHurghada")} />
          <Stack sx={{ padding: "80px 30px" }}>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 600, mb: 10 }}
            >
              {products?.category}
            </Typography>
            <Container>
              <Grid container spacing={2}>
                {products?.products.map((card, index) => (
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
                          component={NavLink}
                          to={`/product/${card.id}`}
                          sx={{
                            overflow: "hidden",
                            "&:hover img": {
                              transform: "scale(1.1)",
                              height: "250px",
                            },
                          }}
                        >
                          <img
                            src={imgPath(card.images[0].image)}
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
                            p: "3px 12px",
                            transform: "translateY(50%) translateX(-50%)",
                            borderRadius: "10px",
                          }}
                        >
                          {card.price}
                        </Typography>
                      </Stack>

                      <CardContent>
                        <Typography
                          variant="h6"
                          component={NavLink}
                          to={`/product/${card.id}`}
                          sx={{
                            fontWeight: 700,
                            marginTop: 4,
                            marginBottom: 2,
                            display: "inline-block",
                          }}
                        >
                          {card.title}
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
                        <Typography
                          className="limit_word"
                          variant="body1"
                          sx={{ py: 2 }}
                        >
                          <RenderRte rte={card.description} />
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
                              backgroundColor: "#0052a4",
                              transition: "all .3s",
                            }}
                            onClick={() => {
                              navigate(`/product/${card.id}`);
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
                          backgroundColor: "#0052a4",
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

export default HurghadaCard;
