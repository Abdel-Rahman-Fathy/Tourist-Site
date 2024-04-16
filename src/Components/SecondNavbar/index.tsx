import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Drawer,
  MenuItem,
  IconButton,
  Paper,
  MenuList,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SecondNavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function SecondNavbar() {
  const [t] = useTranslation();
  const theme = useTheme();
  const { scrollY } = useWindowScrollPosition();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBackground, setNavBackground] = useState("0");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setScrollPosition(scrollY);
  }, [scrollY]);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavBackground("0");
    } else {
      setNavBackground(isMediumScreen ? "60px" : "120px");
    }
  }, [scrollPosition, isMediumScreen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const [isShoppingSubMenuOpen, setShoppingSubMenuOpen] = useState(false);

  const toggleShoppingSubMenu = () => {
    setShoppingSubMenuOpen(!isShoppingSubMenuOpen);
  };
  function SubMenu({ title, link }: PropsType) {
    return (
      <MenuItem sx={{ py: 1.5 }} component={NavLink} to={link}>
        {title}
      </MenuItem>
    );
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        top: navBackground,
        transition: "2s all ease",
        background: "background",
        color: "primary.main",
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
              md={4}
            >
              <Box display={"flex"} flexDirection={"row"} marginY={1}>
                <img src={logo} alt="logo" width={"130px"} />
              </Box>
            </Grid>
            <Grid
              flexDirection={"row"}
              alignItems={"center"}
              gap={2}
              item
              md={8}
              sx={{ display: { md: "flex", xs: "none" } }}
            >
              <ul className="secNavbar">
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"link"} to={"/about"}>
                    {t("aboutUs")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("ExursionsFromHurghada")}
                  </NavLink>
                  <Paper className="subMenu">
                    <MenuList>
                      <SubMenu title="offers 💰" link="" />
                      <SubMenu title="Historical trips" link="" />
                      <SubMenu title="Sea trips " link="" />
                      <SubMenu title="Safari and extreme" link="" />
                      <SubMenu title="Entertainment and spa" link="" />
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("hotales")}
                  </NavLink>
                  <Paper className="subMenu">
                    <MenuList>
                      <MenuItem component={NavLink} to="/e-services/design">
                        test
                      </MenuItem>
                      <MenuItem
                        component={NavLink}
                        to="/e-services/infrastructure"
                      >
                        test1
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("shopping")}
                  </NavLink>
                  <Paper className="subMenu">
                    <MenuList>
                      <MenuItem component={NavLink} to="/e-services/design">
                        test
                      </MenuItem>
                      <MenuItem
                        component={NavLink}
                        to="/e-services/infrastructure"
                      >
                        test1
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("blogs")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("contactUs")}
                  </NavLink>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid item md={6} sx={{ display: { md: "none", xs: "block" } }}>
            <Drawer
              anchor="top"
              open={mobileMenuOpen}
              onClose={toggleMobileMenu}
            >
              <Box
                sx={{ color: "primary.main" }}
                role="presentation"
                onKeyDown={toggleMobileMenu}
              >
                <MenuItem> {t("home")}</MenuItem>
                <MenuItem> {t("aboutUs")}</MenuItem>
                <MenuItem>{t("ExursionsFromHurghada")}</MenuItem>
                <MenuItem> {t("hotales")}</MenuItem>
                <MenuItem onClick={toggleShoppingSubMenu}>
                  {t("shopping")}
                  {isShoppingSubMenuOpen ? (
                    <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ fontWeight: 600, ml: 2 }} />
                  )}
                </MenuItem>
                {isShoppingSubMenuOpen && (
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      mx: 1,
                      color: "#fff  ",
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem>{t("submenu1")}</MenuItem>
                    <MenuItem>{t("submenu2")}</MenuItem>
                    <MenuItem>{t("submenu3")}</MenuItem>
                  </Box>
                )}
                <MenuItem> {t("blogs")}</MenuItem>
                <MenuItem>{t("contactUs")}</MenuItem>
              </Box>
            </Drawer>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open mobile menu"
              edge="start"
              onClick={toggleMobileMenu}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

type PropsType = {
  title: string;
  link: string;
};

export default SecondNavbar;
