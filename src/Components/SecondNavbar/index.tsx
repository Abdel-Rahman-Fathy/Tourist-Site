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
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SecondNavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
import { Category } from "types/Root";

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
  const cat: Category[] | undefined = [...(homeData?.Categories || [])];
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
  // Hotel sub
  const [isHotelSubMenuOpen, setHotelSubMenuOpen] = useState(false);

  const toggleHotelSubMenu = () => {
    setHotelSubMenuOpen(!isHotelSubMenuOpen);
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
          <Grid container>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              item
              md={4}
            >
              <Box
                component={NavLink}
                to={""}
                display={"flex"}
                flexDirection={"row"}
                marginY={1}
              >
                <img
                  src={imgPath(homeData?.siteInformation.logo)}
                  alt="logo"
                  width={"130px"}
                />
              </Box>
            </Grid>
            <Grid
              flexDirection={"row"}
              item
              md={8}
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "center",
              }}
            >
              <ul className="secNavbar">
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("main.Home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"link"} to={"/about"}>
                    {t("main.AboutUs")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("main.ExursionsFromHurghada")}
                  </NavLink>
                  <Paper className="subMenu">
                    <MenuList>
                      {cat.reverse().map((item) => (
                        <SubMenu
                          key={item.id}
                          title={item.title}
                          link={`products/${item.id}`}
                        />
                      ))}
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("main.Hotels")}{" "}
                  </NavLink>

                  <Paper className="subMenu">
                    <MenuList>
                      {homeData?.category_hotels.map((item, index) => (
                        <SubMenu
                          key={item.id}
                          title={item.title}
                          link={`hotels/${item.id}`}
                        />
                      ))}
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink className={"link"} to={""}>
                    {t("main.Shopping")}
                  </NavLink>
                  <Paper className="subMenu">
                    <MenuList>
                      {homeData?.shippings.map((item, index) => (
                        <SubMenu
                          key={item.id}
                          title={item.name}
                          link={`shopping/${item.id}`}
                        />
                      ))}
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <NavLink
                    className={"link"}
                    to={`blog/${homeData?.blogs[0].id}`}
                  >
                    {t("main.Blog")}
                  </NavLink>
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
                    {t("main.ContactUs")}
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
                  <MenuItem onClick={toggleMobileMenu}>
                    {t("main.Home")}
                  </MenuItem>
                </NavLink>
                <NavLink className={"link_down"} to={"/about"}>
                  <MenuItem onClick={toggleMobileMenu}>
                    {t("main.AboutUs")}
                  </MenuItem>
                </NavLink>
                {/* Frist sub item */}
                <MenuItem onClick={toggleExursionsSubMenu}>
                  {t("main.ExursionsFromHurghada")}{" "}
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
                    {cat.reverse().map((item) => (
                      <NavLink
                        key={item.id}
                        onClick={() => {
                          toggleMobileMenu();
                          toggleExursionsSubMenu();
                        }}
                        to={`products/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.title}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* sec sub item */}
                <MenuItem onClick={toggleHotelSubMenu}>
                  {t("main.Hotels")}
                  {isHotelSubMenuOpen ? (
                    <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ fontWeight: 600, ml: 2 }} />
                  )}
                </MenuItem>
                {isHotelSubMenuOpen && (
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      mx: 1,
                      borderRadius: "10px",
                    }}
                  >
                    {homeData?.category_hotels.map((item) => (
                      <NavLink
                        key={item.id}
                        onClick={() => {
                          toggleMobileMenu();
                          toggleHotelSubMenu();
                        }}
                        to={`hotels/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.title}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* third sub item */}
                <MenuItem onClick={toggleShoppingSubMenu}>
                  {t("main.Shopping")}
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
                        to={`shopping/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.name}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* Blogs */}
                <MenuItem onClick={toggleBlogsSubMenu}>
                  {t("main.Blog")}
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
                        to={`blog/${item.id}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.title}</MenuItem>
                      </NavLink>
                    ))}
                  </Box>
                )}
                {/* End */}

                <NavLink className={"link_down"} to={"/contact"}>
                  <MenuItem onClick={toggleMobileMenu}>
                    {t("main.ContactUs")}
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
