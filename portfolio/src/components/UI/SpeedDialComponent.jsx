import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { grey } from "@mui/material/colors"

const actions = [
  {
    icon: (
      <a
        href="https://github.com/areantbd"
        target="_blank"
        rel="noreferrer"
        className="text-dark text-decoration-none"
      >
        <GitHubIcon />
      </a>
    ),
    name: "GitHub",
  },
  {
    icon: (
      <a
        href="https://www.linkedin.com/in/ivanwebdev/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
    ),
    name: "LinkedIn",
  },
  {
    icon: (
      <a
        href="https://calendly.com/ivantbd"
        target="_blank"
        rel="noreferrer"
        className="text-dark text-decoration-none"
      >
        <CalendarMonthIcon />
      </a>
    ),
    name: "Calendly",
  },
  {
    icon: (
      <a
        href="mailto:areantbd@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AlternateEmailOutlinedIcon />
      </a>
    ),
    name: "Email",
  },
];
const greyLight = grey[500]
const greyDark = grey[800]

export default function SpeedDialComponent() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<ConnectWithoutContactOutlinedIcon />}
        FabProps={{
          sx: {
            bgcolor: greyLight,
            "&:hover": {
              bgcolor: greyDark,
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
