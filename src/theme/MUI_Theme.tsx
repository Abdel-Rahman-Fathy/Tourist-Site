import { createTheme } from "@mui/material/styles";
import "../assets/fonts/include.scss";
import "./Mui_Custom.scss";
import { colors } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  shape: {
    borderRadius: 3,
  },
  palette: {
    primary: {
      main: "#0052a4",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F19B02",
      contrastText: "#FFF",
    },
    success: {
      main: "#18CB5F",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#CB1818",
    },
    warning: {
      main: "#F19B02",
      contrastText: "#FFF",
    },
    background: {
      paper: "#F3F5F7",
      default: "#FFFFFF",
    },
    text: {
      primary: "#0052a4",
      secondary: colors.grey[600],
      disabled: colors.grey[600],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
      styleOverrides: {
        root: {
          fontFamily: "sans-serif",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
  },
  typography: {
    // fontFamily: [
    //   "Arial", // Update font family here
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
  },
});
