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
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { ProductSliderType } from "types/HardProducts";

function DialogForm({ open, setOpen, productInfo }: PropsType) {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = () => {
    // console.log(data);
  };
  return (
    <>
      <Dialog
        maxWidth={"md"}
        fullWidth
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            fontSize: "28px",
            textAlign: "center",
            borderBottom: "dashed 2px #000",
          }}
        >
          Book your trip online
        </DialogTitle>
        <Grid container spacing={3} sx={{ py: 5, px: 3 }}>
          <Grid item md={6}>
            <TextField
              label="Name / Family Name"
              fullWidth
              size="small"
              {...register("name")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Email"
              fullWidth
              size="small"
              {...register("email")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Phone (Viber or whatsapp or telegram)"
              fullWidth
              size="small"
              {...register("phone")}
            />
          </Grid>
          <Grid item md={6}>
            {/* <DatePicker label="name" name="startDate" /> */}
            <TextField label="date" fullWidth size="small" />
          </Grid>
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
              Number Of People
            </Typography>
          </Grid>
          <Grid item md={4}>
            <TextField
              label="Adults"
              fullWidth
              size="small"
              {...register("adults")}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              label="Childern (ages 5-11)"
              fullWidth
              size="small"
              {...register("childern")}
            />
          </Grid>
          <Grid item md={4}>
            <TextField label="Infant (ages 5-11)" fullWidth size="small" />
          </Grid>
          <Grid item md={12}>
            <TextField
              label="message"
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
              sx={{ borderRadius: "10px" }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default DialogForm;
type PropsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  productInfo?: ProductSliderType;
};
