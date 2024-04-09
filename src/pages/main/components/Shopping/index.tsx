import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ButtonChip from "../../../../Components/ButtonChip";
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
    id: 6,
  },
  {
    name: "Souvenir",
    id: 7,
  },
  {
    name: "Price of delivery",
    id: 8,
  },
];
function ShoppingPage() {
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
