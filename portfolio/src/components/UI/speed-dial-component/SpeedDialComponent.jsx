import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";



const actions = [
  {
    icon: <WhatsAppIcon />,
    name: "+34 693 509 447",
    onclick: () => {
      alert("hey");
    },
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
      <a href="mailto:areantbd@gmail.com" target="_blank" rel="noreferrer">
        <AlternateEmailOutlinedIcon />
      </a>
    ),
    name: "Email",
  },
];
const greyLight = grey[500];
const greyDark = grey[800];

export default function SpeedDialComponent() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: "absolute", bottom: 16, left: 16 }}
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
              onClick={handleClickOpen}
            />
          ))}
        </SpeedDial>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Feel free to contact me on: <br/>
            WhatsApp: +34 693509 447 <br/>
            Telegram: https://t.me/Ivan_RF
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
