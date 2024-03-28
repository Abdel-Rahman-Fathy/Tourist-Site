import { Box, Typography } from "@mui/material";
import React from "react";

function Hurghada() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        color={"primary.main"}
        variant="h3"
        sx={{ py: 3, fontWeight: 600, textAlign: "center" }}
      >
        Excursions From Hurghada
      </Typography>
    </Box>
  );
}

export default Hurghada;
