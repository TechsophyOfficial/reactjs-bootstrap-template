import {
  AppBar,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import augmentLogo from "../../../assets/icon/augment-logo.svg";
import avatar from "../../../assets/icon/avatar.png";
import { Avatar } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import CONSTANTS from "../../../constants/constants";
import { useTranslation } from "react-i18next";
import COMMON from "../../../constants/common";

const useStyles = makeStyles((theme) => ({
  userProfile: {
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  //   prettier - ignore;
  const classes = useStyles();
  const notifyRef = useRef<any>();
  const openNotify = true
  const { keycloak } = useKeycloak();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const imageSrc = ""
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const getMesssage = () => {
    switch (window.location.pathname) {
      case "/":
        return t(CONSTANTS.WELCOME_MSG);
      case "/component-list":
        return t(CONSTANTS.COMPONENT_LIST_MSG);
      case "/my-profile":
        return t(CONSTANTS.PROFILE_MSG);
      case "/settings":
        return t(CONSTANTS.SETTINGS);
      case "/Theme":
        return t(CONSTANTS.THEME);
      case "/company":
        return t(COMMON.COMPANY);
      case "/termsofuse":
        return t(COMMON.TERMS_OF_USE);
      case "/privacypolicy":
        return t(COMMON.PRIVACY_POLICY);
      case "/cookiepolicy":
        return t(COMMON.COOKIE_POLICY);
      default:
        return t(CONSTANTS.DEFAULT_MSG);
    }
  };

  const renderMessage = () => {
    return (
      <div className="header-msg">
        <Typography variant="h5" >
          {getMesssage()}
        </Typography>
      </div>
    );
  };
  const displayDesktop = () => {
    return (
      <div className="main-container-wrapper">
        <Toolbar className={"toolbar"}>
          {femmecubatorLogo}
          <div className={"menuWrapper"}>
            <div className={"menusList"}>
              <div className={"menuItemsList"}>{renderMessage()}</div>
              {renderUserProfileMenu()}
            </div>
          </div>
        </Toolbar>
      </div>
    );
  };

  const femmecubatorLogo = (
    <Typography
      variant="h6"
      component="h1"
      className={"logo"}
      style={{ cursor: "pointer" }}
      onClick={() => navigate('/')}
    >
      <img width="50px" src={augmentLogo} alt={"brand logo"} />
    </Typography>
  );

  const handleLogout = () => {
    sessionStorage.clear();
    keycloak.logout();
  };

  const handleNavigation = (key) => navigate(key)

  const renderUserProfileMenu = () => {
    return (
      <div style={{ display: "flex", alignItems: 'center' }}>
        <Typography >
          {sessionStorage.getItem(CONSTANTS.USER_EMAIL)}
        </Typography>
        <span style={{ alignItems: 'center' }}>
          <Button
            className={classes.userProfile}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {!imageSrc && keycloak.authenticated ? (
              <Avatar />
            ) : imageSrc && keycloak.authenticated ? (
              <img
                alt={CONSTANTS.PROFILE}
                src={avatar}
              />
            ) : (
              <Avatar />
            )}
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {keycloak.authenticated ? (
              <>
                <MenuItem onClick={() => handleNavigation('/my-profile')}>
                  <span>{t(CONSTANTS.PROFILE)}</span>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <span>{t(CONSTANTS.LOGOUT)}</span>
                </MenuItem>
                <MenuItem onClick={() => handleNavigation('/settings')}>
                  <span>{t(CONSTANTS.SETTINGS)}</span>
                </MenuItem>
              </>
            ) : null}
          </Menu>
        </span>
      </div >
    );
  };

  return (
    <div className={openNotify ? "fixed-header notify-msg" : "fixed-header"}>
      <AppBar
        position="static"
        ref={notifyRef}
        // eslint-disable-next-line no-useless-concat
        className={"header" + " notify-active" + (scrolled ? " shadow" : "")}
      >
        {displayDesktop()}
      </AppBar>
    </div>
  );
};

export default Header;
