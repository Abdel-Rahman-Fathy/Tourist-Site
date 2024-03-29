import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ButtonChip from "../../../../Components/ButtonChip";
import { useTranslation } from "react-i18next";
const trips = [
  {
    name: "offers 💰",
    id: 1,
  },
  {
    name: "Historical trips",
    id: 2,
  },
  {
    name: "Sea trips",
    id: 3,
  },
  {
    name: "Safari and extreme",
    id: 4,
  },
  {
    name: "Entertainment and spa",
    id: 5,
  },
];
function Hurghada() {
  const [t, i18n] = useTranslation();
  return (
    <Paper sx={{ padding: 4 }}>
      <Container maxWidth="lg">
        <Typography
          color={"primary.main"}
          variant="h3"
          sx={{
            py: 3,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {t("contact.whatsapp")}
        </Typography>
        <Grid container justifyContent={"center"} sx={{ py: 8 }} spacing={4}>
          {trips.map((trip) => (
            <ButtonChip key={trip.id} name={trip.name} id={trip.id} />
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}

export default Hurghada;
