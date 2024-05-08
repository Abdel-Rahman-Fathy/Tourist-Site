import { Box, Button, Stack } from "@mui/material";
import FixedSection from "Components/FixedSection";
import SliderAndTable from "./SliderAndTable";
import { useState } from "react";
import DialogForm from "./DialogForm";

function SliderHurhada() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FixedSection title="Excursions From Hurghada" />
      {/* <Container maxWidth={"lg"}> */}
      <Stack
        sx={{
          py: 8,
          width: { md: "60%", xs: "90%" },
          display: "flex",
          margin: " 0 auto",
        }}
      >
        <SliderAndTable />
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
      <DialogForm open={open} setOpen={setOpen} />
    </>
  );
}

export default SliderHurhada;
