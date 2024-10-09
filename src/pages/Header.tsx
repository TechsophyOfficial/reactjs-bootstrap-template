import * as React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useAppSelector } from "../redux/Hook";
import { useDispatch } from "react-redux";
import { styled, Theme } from "@mui/material/styles";
import UserLogo from "../assets/images/man.png";
import SideNav from "./SideNav";
// import { useKeycloak } from "@react-keycloak/web";
import useCustomStyles from "../hooks/CustomStylesHook";

import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import UserMenuItem from "../components/UserMenuItem";
import KeycloakService from "../utils/keycloakService";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const styles = (theme: Theme) => ({
  pageTitle: {
    textTransform: "capitalize",
  },
  headerToolbar: {
    minHeight: 48,
    paddingRight: 24,
  },

  headerIconButton: {
    marginRight: 36,
  },
  hidden: {
    display: "none",
  },
  headerTypography: {
    flexGrow: 1,
    textTransform: "capitalize",
  },
  headerThemeButton: {
    color: theme.palette.common.white,
  },
  headerUserBox: {
    flexGrow: 0,
  },
  headerUserButton: {
    padding: 0,
  },
  headerAvatar: {
    width: 32,
    height: 32,
  },
  headerUserMenu: {
    marginTop: 45,
  },
});

function Header() {
  const themeDataState = useAppSelector((state) => state.updateTheme);
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  // const { keycloak } = useKeycloak();
  const [isLoading, setIsLoading] = React.useState(true);
  // const userName = KeycloakService?.tokenParsed?.preferred_username || "User";
  const userName = "User";
  console.log("KeycloakService", KeycloakService);

  const location = useLocation();
  const routeName =
    location.pathname === "/"
      ? "dashboard"
      : location.pathname.split("/").pop();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleThemeChange = () => {
    const newMode = themeDataState.mode === "dark" ? "light" : "dark";

    dispatch({
      type: "SAVE_THEME_DATA",
      data: {
        ...themeDataState,
        mode: newMode,
      },
    });
  };

  const handleAppLogout = () => {
    if (KeycloakService) {
      // keycloak.logout();
      KeycloakService.doLogout();
    }
  };

  // React.useEffect(() => {
  //   if (keycloak?.tokenParsed) {
  //     setIsLoading(false);
  //   }
  // }, [keycloak]);

  // if (isLoading) {
  //   return <CircularProgress color="secondary" />;
  // }

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar className={classes?.headerToolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={`${classes?.headerIconButton} ${
              open ? classes?.hidden : ""
            }`}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes?.headerTypography}
          >
            {routeName}
          </Typography>

          <Box>
            <IconButton onClick={handleThemeChange}>
              {themeDataState?.mode === "light" ? (
                <DarkModeOutlinedIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
          </Box>

          <Box className={classes?.headerUserBox}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                className={classes?.headerUserButton}
              >
                <Avatar alt={userName} src={UserLogo} />
              </IconButton>
            </Tooltip>

            <Menu
              className={classes?.headerUserMenu}
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
              <UserMenuItem
                onClose={handleCloseUserMenu}
                onLogout={handleAppLogout}
              />
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <SideNav open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
export default Header;
