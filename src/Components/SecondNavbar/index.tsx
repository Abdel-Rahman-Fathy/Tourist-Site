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
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";

function SecondNavbar() {
  const { scrollY } = useWindowScrollPosition();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBackground, setNavBackground] = useState("0");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setScrollPosition(scrollY);
  }, [scrollY]);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavBackground("0");
    } else {
      setNavBackground("80px");
    }
  }, [scrollPosition]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleDropdownOpen = () => {
    setDropdownOpen(true);
  };
  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };
  const handleMenuClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
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
              md={6}
            >
              <Box display={"flex"} flexDirection={"row"}>
                <MailOutlineOutlinedIcon sx={{ mr: 1 }} />
                <Typography>info</Typography>
              </Box>
            </Grid>
            <Grid display={"flex"} flexDirection={"row"} gap={2} item md={4}>
              <Typography
                aria-controls="services-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                sx={{ cursor: "pointer" }}
              >
                Services
              </Typography>
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
            <Grid display={"flex"} flexDirection={"row"} gap={2} item md={2}>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-tiktok"></i>
            </Grid>
          </Grid>
          <Grid item md={6}>
            {/* Mobile Menu */}
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
