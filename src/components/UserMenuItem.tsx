import React from "react";
import { MenuItem, Typography } from "@mui/material";

interface UserMenuItemProps {
  onClose: () => void;
  onLogout: () => void;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ onClose, onLogout }) => {
  return (
    <>
      <MenuItem onClick={onClose}>
        <Typography textAlign="center">Profile</Typography>
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <Typography textAlign="center">Logout</Typography>
      </MenuItem>
    </>
  );
};

export default UserMenuItem;
