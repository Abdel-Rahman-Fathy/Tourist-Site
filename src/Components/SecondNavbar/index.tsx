import React, { useContext, useEffect, useState } from "react";
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
  Typography,
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
import { homeContext } from "pages/HomeContext";

function SubMenu({ title, link }: PropsType) {
  return (
    <MenuItem
      className="subLink"
      sx={{ py: 1.5 }}
      component={NavLink}
      to={link}
    >
      {title}
    </MenuItem>
  );
}

function SecondNavbar() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);

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

  // Handle frist sub item
  const [
    isExursionsFromHurghadaSubMenuOpen,
    setIsExursionsFromHurghadaSubMenuOpen,
  ] = useState(false);
  const toggleExursionsSubMenu = () => {
    setIsExursionsFromHurghadaSubMenuOpen(!isExursionsFromHurghadaSubMenuOpen);
  };
  // secend sub
  const [isShoppingSubMenuOpen, setShoppingSubMenuOpen] = useState(false);

  const toggleShoppingSubMenu = () => {
    setShoppingSubMenuOpen(!isShoppingSubMenuOpen);
  };
  // Blogs sub
  const [isBlogsSubMenuOpen, setBlogsSubMenuOpen] = useState(false);

  const toggleBlogsSubMenu = () => {
    setBlogsSubMenuOpen(!isBlogsSubMenuOpen);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        top: navBackground,
        transition: ".2s all ease",
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
                      {homeData?.Categories.reverse().map((item) => (
                        <SubMenu
                          key={item.id}
                          title={item.title}
                          link={`product/${item.id}`}
                        />
                      ))}
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("hotales")}
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
                    {t("shopping")}
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
                  <Typography className="link">{t("blogs")}</Typography>
                  <Paper className="subMenu">
                    <MenuList>
                      {homeData?.blogs.map((item) => (
                        <SubMenu
                          key={item.id}
                          title={item.title}
                          link={`blog/${item.id}`}
                        />
                      ))}
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={"/contact"}>
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
                <NavLink className={"link_down"} to={"/"}>
                  <MenuItem onClick={toggleMobileMenu}>{t("home")}</MenuItem>
                </NavLink>
                <NavLink className={"link_down"} to={"/about"}>
                  <MenuItem onClick={toggleMobileMenu}>{t("aboutUs")}</MenuItem>
                </NavLink>
                {/* Frist sub item */}
                <MenuItem onClick={toggleExursionsSubMenu}>
                  {t("ExursionsFromHurghada")}{" "}
                  {isExursionsFromHurghadaSubMenuOpen ? (
                    <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ fontWeight: 600, ml: 2 }} />
                  )}
                </MenuItem>
                {isExursionsFromHurghadaSubMenuOpen && (
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      mx: 1,
                      borderRadius: "10px",
                    }}
                  >
                    {homeData?.Categories.reverse().map((item) => (
                      <NavLink
                        key={item.id}
                        onClick={() => {
                          toggleMobileMenu();
                          toggleExursionsSubMenu();
                        }}
                        to={`product/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.title}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* sec sub item */}
                <MenuItem> {t("hotales")}</MenuItem>
                {/* third sub item */}
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
                      borderRadius: "10px",
                    }}
                  >
                    {homeData?.shippings.map((item) => (
                      <NavLink
                        key={item.id}
                        onClick={() => {
                          toggleMobileMenu();
                          toggleShoppingSubMenu();
                        }}
                        to={`product/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.name}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* Blogs */}
                <MenuItem onClick={toggleBlogsSubMenu}>
                  {t("blogs")}
                  {isBlogsSubMenuOpen ? (
                    <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ fontWeight: 600, ml: 2 }} />
                  )}
                </MenuItem>
                {isBlogsSubMenuOpen && (
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      mx: 1,
                      borderRadius: "10px",
                    }}
                  >
                    {homeData?.blogs.map((item) => (
                      <NavLink
                        key={item.id}
                        onClick={() => {
                          toggleMobileMenu();
                          toggleBlogsSubMenu();
                        }}
                        to={`blogs/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.title}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* End */}

                <NavLink className={"link_down"} to={"/contact"}>
                  <MenuItem onClick={toggleMobileMenu}>
                    {t("contactUs")}
                  </MenuItem>
                </NavLink>
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
