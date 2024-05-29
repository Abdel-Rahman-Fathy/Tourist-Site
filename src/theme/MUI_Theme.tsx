import { createTheme } from "@mui/material/styles";
import "../assets/fonts/include.scss";
import "./Mui_Custom.scss";
import { colors } from "@mui/material";

export const theme = (
  maincolor?: string,
  secondaryColor?: string,
  lang?: string
) =>
  createTheme({
    direction: "rtl",
    shape: {
      borderRadius: 3,
    },
    palette: {
      primary: {
        main: maincolor || "#fff",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: secondaryColor || "#F19B02",
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
        main: secondaryColor || "#F19B02",
        contrastText: "#FFF",
      },
      background: {
        paper: "#F3F5F7",
        default: "#FFFFFF",
      },
      text: {
        primary: maincolor || "f00",
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
            fontFamily: lang == "ar" ? "Almarai " : "sans-serif",
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
  });
