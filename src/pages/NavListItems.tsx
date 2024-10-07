import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { useNavigate } from "react-router-dom";

export const NavListItems = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Handle navigation to the Dashboard page
    navigate(`${process.env.PUBLIC_URL}/dashboard`);
  };

  const handleOrdersClick = () => {
    // Handle navigation to the Orders page
    navigate(`${process.env.PUBLIC_URL}/placeholder`);
  };

  // You can define similar handler functions for other list items if needed

  return (
    <React.Fragment>
      <ListItemButton onClick={handleHomeClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleOrdersClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
    </React.Fragment>
  );
};

/* Control Flow: index -> App -> Wrapper -> Header -> SideNav -> NavListItems */
