import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import AspectRatio from "Components/AspectRatio";
import "./card.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
import { Hotel } from "types/Hotel";
import { HotelCat } from "types/Root";

function FeaturedCard({ hotels }: FeaturedCardProps) {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const { homeData } = useContext(homeContext);
  return (
    <Card className="imgCard" component={NavLink} to={""}>
      <AspectRatio ratio={3 / 6}>
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
              to={`/hotels/${hotels.id}`}
              sx={{
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.1)",
                  height: "250px",
                },
              }}
            >
              <Box
                component={"img"}
                src={hotels?.image}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  transition: "all .5s",
                }}
                alt=""
              ></Box>
            </Box>
          </Stack>

          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                marginY: 0.5,
                display: "inline-block",
              }}
            >
              {hotels?.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#0052a4",
                    transition: "all .3s",
                    fontFamily: "Almarai ",
                  }}
                  onClick={() => {
                    navigate(`/hotels/${hotels.id}`);
                  }}
                >
                  {t("main.ReadMore")}
                </Button> */}
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
      </AspectRatio>
    </Card>
  );
}

export type FeaturedCardProps = {
  hotels: HotelCat;
};

export default FeaturedCard;