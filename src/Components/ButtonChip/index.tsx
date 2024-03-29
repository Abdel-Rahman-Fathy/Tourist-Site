import { Button, Grid } from "@mui/material";

function ButtonChip({ id, name }: PropsType) {
  return (
    <Grid item md={3}>
      <Button
        fullWidth
        variant="contained"
        sx={{
          py: 1,
          fontSize: "18px",
          fontWeight: "500",
          "&:hover": {
            background: "#F19B02",
          },
        }}
      >
        {name}
      </Button>
    </Grid>
  );
}

type PropsType = {
  name: string;
  id: number;
};
export default ButtonChip;
