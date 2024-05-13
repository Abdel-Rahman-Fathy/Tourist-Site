import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import imgForm from "../../assets/imgForm.jpg";
import { withStyles } from "@mui/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import z from "zod";
import axios from "axios";
import { useSnackbar } from "notistack";
import { api } from "methods/api";
import { useTranslation } from "react-i18next";
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
  const [t, i18n] = useTranslation();
  const contactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    phone: z.string().min(1, { message: "phone is required" }),
    subject: z.string().min(1, { message: "subject is required" }),
    message: z.string().min(1, { message: "message is required" }),
  });
  type InputContact = z.infer<typeof contactSchema>;
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputContact>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<InputContact> = (data) => {
    axios
      .post(api(`contact`), { ...data })
      .then(() => {
        enqueueSnackbar("تم حذف الخدمة بنجاح");
      })
      .catch((err) => {
        enqueueSnackbar("تعذر في حذف الخدمة", { variant: "error" });
      });
  };
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
        <Grid
          container
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("name")}
              variant="filled"
              label={t("ContactUs.Name")}
              fullWidth
            />
            {errors.name && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.name.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("email")}
              variant="filled"
              label={t("ContactUs.Email")}
              fullWidth
            />
            {errors.email && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.email.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("subject")}
              variant="filled"
              label={t("ContactUs.Subject")}
              fullWidth
            />
            {errors.subject && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.subject.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("phone")}
              variant="filled"
              label={t("ContactUs.Phone")}
              fullWidth
            />
            {errors.phone && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.phone.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              {...register("message")}
              variant="filled"
              label={t("ContactUs.Message")}
              fullWidth
              multiline
              rows={5}
            />
            {errors.message && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.message.message}
              </Typography>
            )}
          </Grid>
          <Grid item md={12}>
            <Stack alignItems={"center"}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                disabled={isSubmitting}
              >
                {t("ContactUs.Send")}
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
