import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { INITIAL_THEME } from "./theme";
import Navigator from "./components/navigation/Navigator";
import Wrapper from "./components/layout/wrapper";
import keycloak from "./keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import RenderOnAuthenticated from "./components/RenderOnAuthenticated";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoadSxpChat from "./components/chatWidget";
import CONSTANTS from "./constants/constants";

const App = () => {
  const setTokens = (): void => {
    const { token, refreshToken, idTokenParsed } = keycloak;
    if (token && refreshToken && idTokenParsed) {
      sessionStorage.setItem(CONSTANTS.USER_EMAIL, idTokenParsed.email);
      sessionStorage.setItem(CONSTANTS.FIRST_NAME, idTokenParsed.given_name);
      sessionStorage.setItem(CONSTANTS.LAST_NAME, idTokenParsed.family_name);
      sessionStorage.setItem(CONSTANTS.USER_ID, idTokenParsed.sub);
      sessionStorage.setItem(CONSTANTS.REACT_TOKEN, token);
      sessionStorage.setItem(CONSTANTS.USER_TYPE, "user");
    }
  };
  const refreshAccessToken = (): void => {
    keycloak
      .updateToken(50)
      .success((refreshed: boolean) => {
        if (refreshed) {
          setTokens();
        }
      })
      .error(() => {
        sessionStorage.clear();
        keycloak.logout();
      });
  };

  const handleEvent = (event: string): void => {
    if (event === "onAuthSuccess") {
      if (window.location.href.indexOf("signup") > -1) {
        window.location.href = "/";
      }
      setTokens();
    }

    if (event === "onTokenExpired") {
      refreshAccessToken();
    }

    if (event === "onAuthLogout") {
      sessionStorage.clear();
    }
  };

  const getAppChildren = () => (
    <ThemeProvider theme={INITIAL_THEME}>
      <Provider store={store}>
        <Wrapper>
          <Navigator />
          {/* <LoadSxpChat /> */}
        </Wrapper>
      </Provider>
    </ThemeProvider>
  );

  return (
    <div className="app-wrapper">
      <ReactKeycloakProvider
        initOptions={{
          onLoad: "login-required",
          checkLoginIframe: false,
        }}
        authClient={keycloak}
        onEvent={handleEvent}
      >
        <RenderOnAuthenticated>{getAppChildren()}</RenderOnAuthenticated>
      </ReactKeycloakProvider>
    </div>
  );
};

export default App;
