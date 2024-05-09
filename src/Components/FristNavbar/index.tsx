import "bootstrap-icons/font/bootstrap-icons.css";
import "./FristNavbar.css";
import Ger from "../../assets/flags/Ger.png";
import Hun from "../../assets/flags/Hun.png";
import en from "../../assets/flags/en.png";
import pol from "../../assets/flags/pol.png";
import romania from "../../assets/flags/romania.png";
import rus from "../../assets/flags/rus.png";
import tur from "../../assets/flags/tur.png";
import eg from "../../assets/flags/eg.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Grid, MenuItem, Select, TextField } from "@mui/material";
import { ReactNode, useState, useEffect, useContext } from "react";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { homeContext } from "pages/HomeContext";

const flags = [
  {
    value: "en",
    path: en,
  },
  {
    value: "ar",
    path: eg,
  },
  {
    value: "tur",
    path: tur,
  },
  {
    value: "rus",
    path: rus,
  },
  {
    value: "Ger",
    path: Ger,
  },
  {
    value: "Hun",
    path: Hun,
  },
  {
    value: "pol",
    path: pol,
  },
  {
    value: "romania",
    path: romania,
  },
];

function FristNavbar() {
  const [t, i18n] = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarPosition, setNavbarPosition] = useState("");
  const { homeData } = useContext(homeContext);
  // const handleChange = (event: SelectChangeEvent) => {
  //   setCountary(event.target.value);
  // };
  const { scrollY } = useWindowScrollPosition();
  const theme = useTheme();

  useEffect(() => {
    setScrollPosition(scrollY);
  }, [scrollY]);
  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarPosition("-120px");
    } else {
      setNavbarPosition("0");
    }
  }, [scrollPosition]);
  function handleLanguage(lan: string) {
    i18n.changeLanguage(lan);
  }
  return (
    <AppBar
      sx={{
        position: "fixed",
        top: navbarPosition,
        transition: "s all  ease  ",
        [theme.breakpoints.up("md")]: {
          height: "60px",
        },
        [theme.breakpoints.down("sm")]: {
          height: "120px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center ",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container spacing={3}>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              item
              md={6}
            >
              <Box display={"flex"} flexDirection={"row"}>
                <MailOutlineOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body1" color={"#fff"}>
                  info@Egyptos-Travel.com |
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <AddLocationOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body1" color={"#fff"}>
                  Hurghada, Egypt
                </Typography>
              </Box>
            </Grid>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"end"}
              alignItems={"center"}
              gap={2}
              item
              md={4}
            >
              <i className="bi bi-facebook"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-tiktok"></i>
            </Grid>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-around"}
              item
              md={2}
            >
              <TextField variant="standard" select value={i18n.language}>
                {flags.map((item) => (
                  <MenuItem
                    key={item.value}
                    value={item.value}
                    onClick={() => {
                      handleLanguage(item.value);
                    }}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <img src={item.path} height={"15px"} width={"30px"} />
                      <Typography
                        variant="body1"
                        sx={{ color: "#000", fontSize: "18px" }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
type PropsType = {
  value: number;
  name: string;
  children: ReactNode;
};

export default FristNavbar;
