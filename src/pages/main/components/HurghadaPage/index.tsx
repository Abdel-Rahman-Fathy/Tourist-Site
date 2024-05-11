import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ButtonChip from "../../../../Components/ButtonChip";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { homeContext } from "../../../HomeContext";

function HurghadaPage() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);
  return (
    <Paper sx={{ padding: "60px 0px" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            py: 3,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {t("ExursionsFromHurghada")}
        </Typography>
        <Grid container padding={"30px 0"}>
          {homeData?.Categories.map((trip) => (
            <ButtonChip
              key={trip.id}
              name={trip.title}
              id={trip.id}
              link={"products"}
            />
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}

export default HurghadaPage;
