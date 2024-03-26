import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import { useDispatch } from "react-redux";
import Header from "./Header";
import "../styles/Wrapper.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Notification from "../components/Notification";
import { initialAlertState } from "../redux/reducers/NotificationState";

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

  //End

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
        <Box className="wrapper-container">
          <CssBaseline />
          <Header />

          <Box
            component="main"
            className="custom-background"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
            }}
          >
            <Toolbar />
            <Box className="content-box-container">
              {props.children}
              {/* <Copyright sx={{ pt: 4 }} /> */}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Wrapper;
