import "bootstrap-icons/font/bootstrap-icons.css";
import "./FristNavbar.css";
import logo from "../../assets/flags/Ger.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { ReactNode, useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import { useTranslation } from "react-i18next";
const flags = [
  {
    name: "en",
    path: logo,
    value: 1,
  },
  {
    name: "ar",
    path: logo,
    value: 2,
  },
];

function FristNavbar() {
  const [t, i18n] = useTranslation();
  const [countary, setCountary] = useState("1");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarPosition, setNavbarPosition] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCountary(event.target.value);
  };
  const { scrollY } = useWindowScrollPosition();

  useEffect(() => {
    setScrollPosition(scrollY);
    console.log("abdo");
  }, [scrollY]);
  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarPosition("-30px");
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
        transition: "2s all  ease  ",
        height: "80px",
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
                <Typography>info@Egyptos-Travel.com |</Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <AddLocationOutlinedIcon sx={{ mr: 1 }} />
                <Typography>Hurghada, Egypt</Typography>
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
              <FormControl variant="standard" fullWidth>
                <Select value={countary} onChange={handleChange} label="Age">
                  {flags.map((item) => (
                    <MenuItem
                      key={item.value}
                      value={item.value}
                      onClick={() => {
                        handleLanguage(item.name);
                      }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        gap={1}
                      >
                        <img src={item.path} height={"15px"} width={"30px"} />
                        <Typography sx={{ color: "#000" }}>
                          {item.name}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
