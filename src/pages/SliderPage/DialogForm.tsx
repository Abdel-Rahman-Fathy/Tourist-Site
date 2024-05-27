import { Button } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dispatch, SetStateAction, useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ProductSliderType } from "types/HardProducts";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DateOnlyFormatString } from "methods/DateFormat";
import axios from "axios";
import { api } from "methods/api";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DialogForm({ open, setOpen }: PropsType) {
  const { id } = useParams();
  const [t] = useTranslation();
  const BookSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    phone: z.string().min(1, { message: "Phone is required" }),
    date: z.string().min(1, { message: "Date is required" }),
    adults: z.string().min(1, { message: "Adults is required" }),
    children: z.string().min(1, { message: "Children is required" }),
    infant: z.string().min(1, { message: "Infant is required" }),
    message: z.string().min(1, { message: "message is required" }),
  });

  type InputBook = z.infer<typeof BookSchema>;
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<InputBook>({
    mode: "onChange",
    resolver: zodResolver(BookSchema),
  });
  const onSubmit: SubmitHandler<InputBook> = (data) => {
    axios
      .post(api(`book/${id}`), { ...data })
      .then(() => {
        // enqueueSnackbar("تم حذف الخدمة بنجاح");
        reset({
          name: "",
          email: "",
          phone: "",
          date: "",
          adults: "",
          children: "",
          infant: "",
          message: "",
        });
      })
      .catch((err) => {
        // enqueueSnackbar("تعذر في حذف الخدمة", { variant: "error" });
      });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        maxWidth={"md"}
        fullWidth
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DialogTitle>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "700",
              borderBottom: "dashed 2px #999  ",
              pb: 2,
            }}
          >
            {t("Hurghada.Bookyourtriponline")}
          </Typography>
        </DialogTitle>
        <Grid container spacing={3} sx={{ py: 5, px: 3 }}>
          <Grid item md={6}>
            <TextField
              label={t("Hurghada.NameFamilyName")}
              fullWidth
              size="small"
              {...register("name")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label={t("Hurghada.Email")}
              fullWidth
              size="small"
              {...register("email")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label={t("Hurghada.Phone")}
              fullWidth
              size="small"
              {...register("phone")}
            />
          </Grid>
          <Grid item md={6}>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  label={t("Hurghada.Date")}
                  slotProps={{ textField: { fullWidth: true, size: "small" } }}
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(newValue) => {
                    field.onChange(newValue?.format(DateOnlyFormatString));
                  }}
                />
              )}
            />
          </Grid>{" "}
          <Grid item md={12}>
            <Typography
              variant="h5"
              sx={{
                color: "warning.main",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              {t("Hurghada.NumberOfPeople")}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <TextField
              label={t("Hurghada.Adults")}
              fullWidth
              size="small"
              {...register("adults")}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              label={t("Hurghada.Children")}
              fullWidth
              size="small"
              {...register("children")}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              label={t("Hurghada.Infant")}
              fullWidth
              size="small"
              {...register("infant")}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              label={t("Hurghada.Message")}
              multiline
              rows={5}
              fullWidth
              size="small"
              {...register("message")}
            />
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: "10px", padding: "10px 20px" }}
            >
              {t("Hurghada.BookNow")}
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </LocalizationProvider>
  );
}

export default DialogForm;
type PropsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
