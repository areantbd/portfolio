import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageTwoToneIcon from '@mui/icons-material/ContactPageTwoTone';
import codeWars from "./icons/codewars_logo_icon_145389.ico"
import { grey } from "@mui/material/colors";
import ScrollUp from "../scroll-up/ScrollUp";



const actions = [
  {
    icon: (
    <a
      href="https://wa.me/+34693509447"
      target="_blank"
      rel="noreferrer"
      className="text-success"
    >
    <WhatsAppIcon />
    </a>
    ),
    name: "WhatsApp",
    tag: "contact",
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
      <a href="mailto:areantbd@gmail.com" target="_blank" rel="noreferrer">
        <AlternateEmailOutlinedIcon />
      </a>
    ),
    name: "Email",
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
      <a href="https://github.com/areantbd" target="_blank" rel="noreferrer" 
      className="text-dark text-decoration-none">
        <GitHubIcon />
      </a>
    ),
    name: "Github",
  },
  {
    icon: (
      <a href="https://www.codewars.com/users/Ivan180687" target="_blank" rel="noreferrer" 
      className="text-dark text-decoration-none">
        <img src={codeWars} className="w-50 rounded-5" alt="codeWars" style={{backgroundColor: "red"}}></img>
      </a>
    ),
    name: "CodeWars",
  },
  {
    icon: (
      <a href="https://drive.google.com/file/d/1RBZLcNbRzvwgJaYDIUh5gM47I6FH8-r-/view" target="_blank" rel="noreferrer" 
      className="text-dark text-decoration-none">
      <ContactPageTwoToneIcon />
      </a>
    ),
    name: "Currículum Vitae",
  },
];
const greyLight = grey[500];
const greyDark = grey[800];

export default function SpeedDialComponent() {
  return (
    <>
      <Box sx={{ height: 0, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: "absolute", bottom: 16, left: 16, height: 80}}
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
      <ScrollUp />
      </Box>
    </>
  );
}
