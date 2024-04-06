/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Avatar,
  Button,
  IconButton,
  List,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

import GTranslateIcon from "@mui/icons-material/GTranslate";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { t } = useTranslation();
  const [navVisibilty, setNavVisibilty] = useState<"show" | "hide">("hide");

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <nav className="navbar tight-section ">
        <button
          className="menu-btn"
          // onClick={() => {
          //   setNavVisibilty("show");
          // }}
        >
          <List />
        </button>
        <ul
          className={`right ${navVisibilty}`}
          // onClick={() => {
          //   setNavVisibilty("hide");
          // }}
        >
          <li className="has-dropdown-on-hover">
            efjiwerk
            {/* <span>{t("links.eServices.main")}</span>
            <Paper className="menu">
              <MenuList>
                <MenuItem component={NavLink} to="/e-services/design">
                  {t("links.eServices.design")}
                </MenuItem>
                <MenuItem component={NavLink} to="/e-services/infrastructure">
                  البنية التحتية
                </MenuItem>
              </MenuList>
            </Paper> */}
          </li>
          <li></li>
        </ul>

        {/* {user.userState === UserState.NOT_USER && (
          <div className="left">
            <Button
              variant="contained"
              size="small"
              onClick={openLoginDialog}
              color="secondary"
            >
              تسجيل الدخول
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={openRegisterDialog}
              color="secondary"
            >
              التسجيل
            </Button>
            <NavLink to={"/"} className="logo-link">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        )}
        {user.userState === UserState.USER && (
          <>
            <Tooltip title={"مرحبا, " + user.user?.name}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.user?.name} src={user.user?.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"user"} disabled>
                <Typography textAlign="center">
                  مرحبا, {user.user?.name}
                </Typography>
              </MenuItem>
              <MenuItem
                key={"setting"}
                onClick={() => {
                  handleCloseUserMenu();
                  logout(dispatch);
                }}
              >
                <Typography textAlign="center">تسجيل الخروج</Typography>
              </MenuItem>
            </Menu>
          </>
        )} */}
      </nav>
    </>
  );
}

export default Navbar;
