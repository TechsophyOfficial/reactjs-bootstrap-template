/* Control Flow: index -> App -> Wrapper -> Header -> SideNav */

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { NavListItems } from "./NavListItems";
import LightLogo from "../assets/icons/techsophy_logo.png";
import DarkLogo from "../assets/icons/Logo.svg";
import { useTheme, Theme } from "@mui/material";
import useCustomStyles from "../hooks/CustomStylesHook";
const drawerWidth: number = 240;

// Styled component for customizing the Drawer component from Material-UI

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

interface NavProps {
  open: boolean;
  toggleDrawer: () => void;
}

const styles = (theme: Theme) => ({
  headerToolbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    minHeight: 48,
  },
});

const SideNav = ({ open, toggleDrawer }: NavProps) => {
  const theme = useTheme();
  // Custom hook to define and manage styles for components
  // This hook leverages Material-UI's `useCustomStyles` utility to create reusable styles

  const classes = useCustomStyles(styles, theme);
  return (
    /* 
  Drawer component toggles visibility based on the 'open' state and contains a toolbar and list of navigation items.
*/
    <Drawer variant="permanent" open={open}>
      <Toolbar className={classes?.headerToolbarContainer}>
        <img
          src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
          alt="comapny-logo"
          width={140}
        />
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">{NavListItems()}</List>
    </Drawer>
  );
};

export default SideNav;
