import "bootstrap-icons/font/bootstrap-icons.css";
import "./FristNavbar.css";
import Ger from "../../assets/flags/Ger.png";
import Hun from "../../assets/flags/Hun.png";
import en from "../../assets/flags/en.png";
import pol from "../../assets/flags/pol.png";
import rom from "../../assets/flags/romania.png";
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
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import useUrlLanguage from "methods/changeLanguage";
const flags = [
  {
    value: "en",
    path: en,
    name: "EN",
  },
  {
    value: "ru",
    path: rus,
    name: "RUS",
  },
  {
    value: "ge",
    path: Ger,
    name: "GER",
  },
  {
    value: "po",
    path: pol,
    name: "POL",
  },
  {
    value: "bu",
    path: rom,
    name: "ROM",
  },

  {
    value: "hu",
    path: Hun,
    name: "HUN",
  },
  {
    value: "tu",
    path: tur,
    name: "TUR",
  },

  {
    value: "ar",
    path: eg,
    name: "AR",
  },
];

function FristNavbar() {
  const [t, i18n] = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarPosition, setNavbarPosition] = useState("");
  const { homeData } = useContext(homeContext);
  const { scrollY } = useWindowScrollPosition();
  const theme = useTheme();
  const changeUrlLanguage = useUrlLanguage();

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
  function handleLanguage(lang: string) {
    // i18n.changeLanguage(lan);
    changeUrlLanguage(lang);
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
          <Grid container spacing={1}>
            <Grid
              display={"flex"}
              sx={{
                flexDirection: { md: "row", xs: "column" },
                alignItems: { md: "center", xs: "start" },
              }}
              item
              md={7}
            >
              <Box display={"flex"} flexDirection={"row"}>
                <MailOutlineOutlinedIcon sx={{ mx: 0.3 }} />
                <Typography variant="body1" color={"#fff"}>
                  {homeData?.siteInformation.email} |
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <AddLocationOutlinedIcon sx={{ mx: 0.3 }} />
                <Typography variant="body1" color={"#fff"}>
                  {homeData?.siteInformation.address}
                </Typography>
              </Box>
            </Grid>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"end"}
              alignItems={"center"}
              gap={1}
              item
              md={3}
            >
              <NavLink to={homeData?.socialMedia[0].link || ""} target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="icons"
                  target="_blank"
                />
              </NavLink>
              <NavLink to={homeData?.socialMedia[1].link || ""} target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[2].link || ""} target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="icons" />
              </NavLink>
              <NavLink
                to={homeData?.socialMedia[3]?.link || ""}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTiktok} className="icons" />
              </NavLink>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "150px",
                justifyContent: "end",
              }}
              item
              md={2}
            >
              <TextField variant="standard" select value={i18n.language}>
                {flags.map((item) => (
                  <MenuItem
                    key={item.value}
                    value={item.value}
                    sx={{
                      backgroundColor: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
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
                        sx={{
                          color: "#fff",
                          fontSize: "18px",
                        }}
                      >
                        {item.name}
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
