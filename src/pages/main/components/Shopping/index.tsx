import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import ButtonChip from "../../../../Components/ButtonChip";
import { useTranslation } from "react-i18next";
const trips = [
  {
    name: "Fruits",
    id: 1,
  },
  {
    name: "Sim cards",
    id: 2,
  },
  {
    name: "Oils",
    id: 3,
  },
  {
    name: "Coffee and other drinks",
    id: 4,
  },
  {
    name: "Cotton",
    id: 5,
  },
  {
    name: "Shrimps",
    id: 5,
  },
  {
    name: "Souvenir",
    id: 5,
  },
  {
    name: "Price of delivery",
    id: 5,
  },
];
function ShoppingPage() {
  const [t, i18n] = useTranslation();
  return (
    <Stack sx={{ padding: "60px 0px" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            py: 3,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Shopping
        </Typography>
        <Grid
          container
          columnSpacing={15}
          rowSpacing={3}
          justifyContent={"center"}
          padding={"30px 0"}
        >
          {trips.map((trip) => (
            <ButtonChip key={trip.id} name={trip.name} id={trip.id} />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default ShoppingPage;
