import { Button, Grid, Stack, TextField } from "@mui/material";
import imgForm from "../../assets/imgForm.jpg";
import { withStyles } from "@mui/styles";
const styles = {
  root: {
    "& .MuiInputLabel-root": {
      color: "#000", // Change the label color here
    },
    "& .MuiInputBase-root": {
      borderColor: "#000", // Change the border color here
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000", // Change the border color when focused
    },
  },
};
const CustomTextField = withStyles(styles)(TextField);
function FormPage() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${imgForm})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingTop: { md: "200px", xs: "750 px" },
      }}
    >
      <Grid
        container
        component={"form"}
        spacing={3}
        sx={{ width: "80%", marginX: "auto", justifyContent: "center" }}
      >
        <Grid item md={6}>
          <CustomTextField label={"Name"} fullWidth required />
        </Grid>
        <Grid item md={6}>
          <CustomTextField label={"Email"} fullWidth required />
        </Grid>
        <Grid item md={6}>
          <CustomTextField label={"Subject"} fullWidth required />
        </Grid>
        <Grid item md={6}>
          <CustomTextField label={"Phone"} fullWidth required />
        </Grid>
        <Grid item md={12}>
          <CustomTextField
            label={"Massage"}
            fullWidth
            required
            multiline
            rows={5}
          />
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 3, padding: "10px 60px", borderRadius: "20px" }}
        >
          Send
        </Button>
      </Grid>
    </Stack>
  );
}

export default FormPage;
