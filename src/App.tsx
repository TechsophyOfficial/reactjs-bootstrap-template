import React from "react";
import "./App.css";
import CONSTANTS from "./constants/constants";
import Keycloak from "keycloak-js";
import store from "./redux/Store";
import { Provider } from "react-redux";
import Wrapper from "./pages/Wrapper";
import Navigation from "./Navigator";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  // const logoutAndClearSession = (): void => {
  //   keycloak.logout();
  //   sessionStorage.clear();
  // };

  // const setTokens = (): void => {
  //   const { token, refreshToken, idTokenParsed }: any = keycloak;

  //   if (token && refreshToken && idTokenParsed) {
  //     sessionStorage.setItem(
  //       CONSTANTS.USER_DATA.USER_EMAIL,
  //       idTokenParsed.email
  //     );
  //     sessionStorage.setItem(
  //       CONSTANTS.USER_DATA.FIRST_NAME,
  //       idTokenParsed.given_name
  //     );
  //     sessionStorage.setItem(
  //       CONSTANTS.USER_DATA.LAST_NAME,
  //       idTokenParsed.family_name
  //     );
  //     sessionStorage.setItem(CONSTANTS.USER_DATA.USER_ID, idTokenParsed.sub);
  //     sessionStorage.setItem(CONSTANTS.USER_DATA.REACT_TOKEN, token);
  //     sessionStorage.setItem(CONSTANTS.USER_DATA.USER_TYPE, "user");
  //   }
  // };

  // const refreshAccessToken = (): void => {
  //   keycloak
  //     .updateToken(CONSTANTS.VALIDATION.TOKEN_MIN_VALIDITY)
  //     .then((refreshed: boolean) => {
  //       if (refreshed) {
  //         setTokens();
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Token refresh failed:", error);
  //       logoutAndClearSession();
  //     });
  // };

  const getAppChildren = () => (
    <Router>
      <Provider store={store}>
        <Wrapper>
          <Navigation />
        </Wrapper>
      </Provider>
    </Router>
  );

  return <>{getAppChildren()}</>;
};

export default App;
