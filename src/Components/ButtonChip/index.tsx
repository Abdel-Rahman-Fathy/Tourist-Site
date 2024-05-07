import { Box, Button, Grid, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

function ButtonChip({ id, name }: PropsType) {
  return (
    <Grid item md={3}>
      <Stack
        component={NavLink}
        to={`product/${id}`}
        sx={{
          backgroundColor: "primary.main",
          py: 1,
          fontSize: "18px",
          fontWeight: "600",
          width: "280 px",
          borderRadius: "10px",
          textAlign: "center",
          color: "#fff",
          "&:hover": {
            background: "#F19B02",
          },
        }}
      >
        {name}
      </Stack>
    </Grid>
  );
}

type PropsType = {
  name: string;
  id: number;
};
export default ButtonChip;
