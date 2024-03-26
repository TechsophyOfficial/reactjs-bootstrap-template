import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./App.css";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import CONSTANTS from "./constants/constants";
import Keycloak from "keycloak-js";
import store from "./redux/Store";
import { Provider } from "react-redux";
import Header from "./pages/Header";
import Wrapper from "./pages/Wrapper";
import Navigation from "./Navigator";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  // !--------- KEYCLOAK CODE -------------

  const keycloak = new Keycloak({
    realm: `${process.env.REACT_APP_KEYCLOAK_REALM}`,
    url: `${process.env.REACT_APP_KEYCLOAK_URL}auth/`,
    clientId: `${process.env.REACT_APP_KEYCLOAK_CLIENT_ID}`,
  });

  const setTokens = (): void => {
    const { token, refreshToken, idTokenParsed }: any = keycloak;

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
      .then((refreshed: boolean) => {
        if (refreshed) {
          setTokens();
        }
      })
      .catch(() => {
        keycloak.logout();
        sessionStorage.clear();
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
      keycloak.logout();
      sessionStorage.clear();
    }
    if (event === "OnAuthRefreshError") {
      keycloak.logout();
      sessionStorage.clear();
    }
  };

  // END--------- KEYCLOAK CODE ------------- END

  const getAppChildren = () => (
    <Router>
      <Provider store={store}>
        <Wrapper>
          <Navigation />
        </Wrapper>
      </Provider>
    </Router>
  );

  return (
    <div>
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
