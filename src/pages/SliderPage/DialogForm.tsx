import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

function DialogForm({ open, setOpen }: PropsType) {
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
            <TextField label="Name / Family Name" fullWidth size="small" />
          </Grid>
          <Grid item md={6}>
            <TextField label="Email" fullWidth size="small" />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Phone (Viber or whatsapp or telegram)"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item md={6}>
            <TextField label="Trip Date" fullWidth size="small" />
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
};
