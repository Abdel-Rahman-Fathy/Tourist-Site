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
          <Grid item xs={12} md={6}>
            <CustomTextField
              variant="filled"
              label={"Email"}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              variant="filled"
              label={"Subject"}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              variant="filled"
              label={"Phone"}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              variant="filled"
              label={"Massage"}
              fullWidth
              required
              multiline
              rows={5}
            />
          </Grid>
          <Grid item md={12}>
            <Stack alignItems={"center"}>
              <Button variant="contained" size="large" color="secondary">
                Send
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ my: 3 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6922.018878939414!2d31.254526996780413!3d29.835149312149156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584b87dc71afdd%3A0x567dbd805f095230!2z2K3ZhNmI2KfZhg!5e0!3m2!1sar!2seg!4v1715283446984!5m2!1sar!2seg"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default FormPage;
