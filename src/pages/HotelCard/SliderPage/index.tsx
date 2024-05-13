import { Box, Button, Stack } from "@mui/material";
import FixedSection from "Components/FixedSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "methods/api";
import axios from "axios";
import { ProductSliderType } from "types/HardProducts";
import Spinner from "pages/SpinnerPage/Spinner";
import SliderAndTableHotel from "./SliderAndTable";
import { HotelSliderType } from "types/Hotel";

function SliderHotel() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const { id } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [cardHotelInfo, setcardHotelInfo] = useState<
    HotelSliderType | undefined
  >(undefined);
  function getProductData() {
    setStatus("loading");
    //
    axios
      .get<{ data: HotelSliderType }>(api(`hotel/${id}`))
      .then(({ data }) => {
        setStatus("done");
        setcardHotelInfo(data.data);
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("none");
      });
  }
  useEffect(() => {
    getProductData();
  }, [id]);
  return (
    <>
      {status == "done" ? (
        <>
          <FixedSection title="Excursions From Hurghada" />
          <Stack
            sx={{
              py: 8,
              width: { md: "60%", xs: "90%" },
              display: "flex",
              margin: " 0 auto",
            }}
          >
            <SliderAndTableHotel cardHotelInfo={cardHotelInfo} />
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                target="_blank"
                variant="contained"
                href=""
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#0052a4",
                  transition: "all .3s",
                }}
              >
                View Video
              </Button>
            </Box>
          </Stack>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default SliderHotel;
