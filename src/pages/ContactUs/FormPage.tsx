import { Button, Container, Grid, Stack, TextField } from "@mui/material";
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
        pb: 4,
        pt: 12,
      }}
    >
      <Container maxWidth="lg">
        <Grid container component={"form"} spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomTextField
              variant="filled"
              label={"Name"}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <CustomTextField
              variant="filled"
              label={"Email"}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <CustomTextField
              variant="filled"
              label={"Subject"}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <CustomTextField
              variant="filled"
              label={"Phone"}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={12}>
            <CustomTextField
              variant="filled"
              label={"Massage"}
              fullWidth
              required
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack alignItems={"center"}>
              <Button variant="contained" size="large" color="secondary">
                Send
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default FormPage;
