import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import Header from "./Header";
import { StyledEngineProvider } from "@mui/material/styles";
import Notification from "../components/Notification";
import { initialAlertState } from "../redux/reducers/NotificationState";
import LoadSxpChat from "../components/chatWidget";
import useCustomStyles from "../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
// We use the Material-UI (MUI) library for styling

const styles = (theme: any)=>({
  wrapperContainer: {
    display: "flex",
  },
  contentBoxContainer: {
    padding: "0 1% 0 1%",
  },
  customBackground: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
});


const Wrapper = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const dispatch = useAppDispatch();
  const themeDataState = useAppSelector((state) => state.UpdateTheme);
  const notifyDataState = useAppSelector((state) => state.NotificationAlert);

  // Function to reset notification data
  const resetNotificationData = () => {
    dispatch({
      type: "SEND_ALERT",
      data: {
        enable: initialAlertState.enable,
        type: initialAlertState.type,
        message: initialAlertState.message,
        duration: initialAlertState.duration,
      },
    });
  };

  // Application Theme

  const theme = createTheme({
    palette: {
      mode: themeDataState?.mode,
      primary: {
        main: themeDataState?.primary,
        light: themeDataState?.primaryLight,
        contrastText: "#f8f9fa",
      },
      secondary: {
        main: themeDataState?.secondary,
        contrastText: "#f8f9fa",
      },
      error: {
        main: themeDataState?.error,
      },
    },
    typography: {
      fontFamily: "Helvetica, Arial, sans-serif",
    },
  });

  // Apllication Theme End
  const classes= useCustomStyles(styles,theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Notification
          open={notifyDataState.enable}
          type={notifyDataState.type}
          message={notifyDataState.message}
          duration={notifyDataState.duration}
          setOpen={() => resetNotificationData()}
        />
        <Box className={classes?.wrapperContainer}>
          <CssBaseline />
          {/* Header Component provides consistent navigation or information across the application. */}
          <Header />

          <Box
            component="main"
            className={classes?.customBackground}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
            }}
          >
            <Toolbar />
            <Box className={classes?.contentBoxContainer}>
              {props.children}
              {/* <Copyright sx={{ pt: 4 }} /> */}
            </Box>
          </Box>
        </Box>
        {/* <LoadSxpChat /> */}
        </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Wrapper;

/* Control Flow: index -> App -> Wrapper */
