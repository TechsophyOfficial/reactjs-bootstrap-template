import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./App.css";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import CONSTANTS from "./constants/constants";
import Keycloak from "keycloak-js";
import store from "./redux/store";
import { Provider } from "react-redux";
import Wrapper from "./pages/Wrapper";
import Navigation from "./Navigator";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const keycloak = new Keycloak({
    realm: `${process.env.REACT_APP_KEYCLOAK_REALM}`,
    url: `${process.env.REACT_APP_KEYCLOAK_URL}auth/`,
    clientId: `${process.env.REACT_APP_KEYCLOAK_CLIENT_ID}`,
  });

  const logoutAndClearSession = (): void => {
    keycloak.logout();
    sessionStorage.clear();
  };

  const setTokens = (): void => {
    const { token, refreshToken, idTokenParsed }: any = keycloak;

    if (token && refreshToken && idTokenParsed) {
      sessionStorage.setItem(
        CONSTANTS.USER_DATA.USER_EMAIL,
        idTokenParsed.email
      );
      sessionStorage.setItem(
        CONSTANTS.USER_DATA.FIRST_NAME,
        idTokenParsed.given_name
      );
      sessionStorage.setItem(
        CONSTANTS.USER_DATA.LAST_NAME,
        idTokenParsed.family_name
      );
      sessionStorage.setItem(CONSTANTS.USER_DATA.USER_ID, idTokenParsed.sub);
      sessionStorage.setItem(CONSTANTS.USER_DATA.REACT_TOKEN, token);
      sessionStorage.setItem(CONSTANTS.USER_DATA.USER_TYPE, "user");
    }
  };

  const refreshAccessToken = (): void => {
    keycloak
      .updateToken(CONSTANTS.VALIDATION.TOKEN_MIN_VALIDITY)
      .then((refreshed: boolean) => {
        if (refreshed) {
          setTokens();
        }
      })
      .catch((error) => {
        console.error("Token refresh failed:", error);
        logoutAndClearSession();
      });
  };

  const handleEvent = (event: string): void => {
    if (event === "onAuthSuccess") {
      if (window.location.pathname === "/signup") {
        window.location.href = "/";
      }
      setTokens();
    }

    if (event === "onTokenExpired") {
      refreshAccessToken();
    }

    if (event === "onAuthLogout" || event === "onAuthRefreshError") {
      logoutAndClearSession();
    }
  };

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
  );
};

export default App;
