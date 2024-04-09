import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";
const actions = [
  {
    icon: <WhatsAppIcon sx={{ color: "#fff", fontSize: "40px" }} />,
    name: "WhatsApp",
    bgcolor: "#25d366",
  },
  {
    icon: <TelegramIcon sx={{ color: "#fff", fontSize: "40px" }} />,
    name: "Telegram",
    bgcolor: "#279dd8",
  },
  {
    icon: (
      <SettingsPhoneIcon
        sx={{
          color: "#784F99",
          fontSize: "40px",
          background: "#fff",
          borderRadius: "25px",
        }}
      />
    ),
    name: "Viber",
    bgcolor: "#784F99",
  },
  {
    icon: <CallIcon sx={{ color: "#fff", fontSize: "40px" }} />,
    name: "Phone",
    bgcolor: "green",
  },
];
function FixedIcon() {
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: "10px",
        right: "20px",
        zIndex: "10000000000000000000000",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16, fontSize: "200px" }}
        icon={
          <SpeedDialIcon
            icon={<EditIcon />}
            openIcon={<MarkUnreadChatAltIcon />}
          />
        }
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              width: "60px",
              height: "60px",
              bgcolor: action.bgcolor,
              "&:hover": {
                background: action.bgcolor,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default FixedIcon;
