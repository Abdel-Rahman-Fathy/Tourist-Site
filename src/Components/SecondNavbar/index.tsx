import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  Drawer,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/logo.png";
const links = [
  {
    name: "Home",
    id: "1",
  },
  {
    name: "About Us",
    id: "2",
  },
  {
    name: "Excursions From Hurghada",
    id: "3",
  },
  {
    name: "Hotels",
    id: "4",
  },
  {
    name: "Shopping",
    id: "5",
  },
  {
    name: "Blog",
    id: "6",
  },
  {
    name: "Contact Us",
    id: "7",
  },
];
function SecondNavbar() {
  const theme = useTheme();
  const { scrollY } = useWindowScrollPosition();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBackground, setNavBackground] = useState("0");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
  const handleDropdownOpen = () => {
    setDropdownOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
              {links.map((item) => (
                <Typography
                  key={item.id}
                  aria-controls="services-menu"
                  aria-haspopup="true"
                  variant="body1"
                  sx={{ cursor: "pointer", fontWeight: "600", ml: 1 }}
                >
                  {item.name}
                </Typography>
              ))}
              <Menu
                id="services-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ position: "fixed", top: "10px" }}
              >
                <Box sx={{ background: "red" }}>
                  <MenuItem onClick={handleMenuClose}>Service 1</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Service 2</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Service 3</MenuItem>
                </Box>
              </Menu>
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
                onClick={toggleMobileMenu}
                onKeyDown={toggleMobileMenu}
              >
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem
                  onClick={handleDropdownOpen}
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  Services
                </MenuItem>
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

export default SecondNavbar;
