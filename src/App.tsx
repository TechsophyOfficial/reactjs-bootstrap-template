import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./App.css";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import CONSTANTS from "./constants/constants";
import Keycloak from "keycloak-js";
import store from "./redux/Store";
import { Provider } from "react-redux";
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

  // Function to set tokens in session storage
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
  // Function to refresh access token
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

  // Function to handle Keycloak events
  const handleEvent = (event: string): void => {
    if (event === "onAuthSuccess") {
      // Redirect to home page after successful authentication
      if (window.location.href.indexOf("signup") > -1) {
        window.location.href = "/";
      }
      setTokens();
    }

    if (event === "onTokenExpired") {
      refreshAccessToken();
    }

    if (event === "onAuthLogout" || event === "OnAuthRefreshError") {
      // Logout and clear session storage on logout or refresh error
      keycloak.logout();
      sessionStorage.clear();
    }
  };

  // END--------- KEYCLOAK CODE ------------- END

  // Function to return child components of the application

  const getAppChildren = () => (
    <Router>
      <Provider store={store}>
        <Wrapper>
          {/* Wrapper component is used to wrap the navigation and provide additional layout such as Header.*/}
          <Navigation />
          {/* Navigation component contains the routing structure of the application. */}
        </Wrapper>
      </Provider>
    </Router>
  );

  //ReactKeycloakProvider is being used to provide authentication capabilities.

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

// RenderOnAuthenticated is a component that renders its children only when the user is authenticated.

export default App;
