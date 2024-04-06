import "./top-navbar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/flags/Ger.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { ReactNode, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { AppBar } from "@mui/material";

const flags = [
  {
    name: "eng",
    path: logo,
    value: 1,
  },
  {
    name: "egy",
    path: logo,
    value: 2,
  },
];
function TopNavbar() {
  const [countary, setCountary] = useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setCountary(event.target.value);
  };
  return (
    <nav className="top-navbar">
      <div className="nav-item main">
        <div className="content">
          <AppBar position="static">
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
                    <Select
                      value={countary}
                      onChange={handleChange}
                      label="Age"
                    >
                      {flags.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            gap={1}
                          >
                            <img
                              src={item.path}
                              height={"15px"}
                              width={"30px"}
                            />
                            <Typography>{item.name}</Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
