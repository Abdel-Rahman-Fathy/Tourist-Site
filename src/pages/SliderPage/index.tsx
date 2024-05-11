import { Box, Button, Stack } from "@mui/material";
import FixedSection from "Components/FixedSection";
import { useEffect, useState } from "react";
import DialogForm from "./DialogForm";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "methods/api";
import axios from "axios";
import { ProductSliderType } from "types/HardProducts";
import SliderAndTable from "./SliderAndTable";
import Spinner from "pages/SpinnerPage/Spinner";

function SliderHurhada() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [productInfo, setProductInfo] = useState<ProductSliderType | undefined>(
    undefined
  );
  function getProductData() {
    setStatus("loading");
    //
    axios
      .get<{ data: ProductSliderType }>(api(`product/${id}`))
      .then(({ data }) => {
        setStatus("done");
        setProductInfo(data.data);
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
            <SliderAndTable productInfo={productInfo} />
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Book Now
              </Button>
            </Box>
          </Stack>
          <DialogForm open={open} setOpen={setOpen} productInfo={productInfo} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default SliderHurhada;
