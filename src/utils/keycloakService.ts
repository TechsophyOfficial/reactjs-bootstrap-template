import Keycloak from "keycloak-js";
import CONSTANTS, {
  AUTH_SERVER_URL,
  CLIENT_ID,
  REALM,
} from "../constants/constants";

const storeToken = (token: string | undefined | null) => {
  sessionStorage.setItem("react-token", token ?? "");
};

const keycloak = new Keycloak({
  url: `${AUTH_SERVER_URL}/auth`,
  realm: REALM,
  clientId: CLIENT_ID,
});

const initKeycloak = (onAuthenticatedCallback: any) => {
  keycloak
    .init({
      onLoad: "check-sso",
      //   silentCheckSsoRedirectUri:
      //     window.location.origin + "/silent-check-sso.html",
      checkLoginIframe: false,
      pkceMethod: "S256",
    })
    .then((authenticated: any) => {
      console.log("authenticated", keycloak.token);
      if (authenticated) {
        const token: any = keycloak?.token;
        onAuthenticatedCallback();
        sessionStorage.setItem(CONSTANTS?.REACT_TOKEN, token);
      } else {
        doLogin();
      }
    })
    .catch((err: any) => {
      console.log("errorrrrr", err);
    });
};

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback?: any) =>
  keycloak.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const getFullname = () =>
  (
    (keycloak.tokenParsed?.given_name ?? "") +
    " " +
    (keycloak.tokenParsed?.family_name ?? "")
  ).trim();

const getSub = () => keycloak.tokenParsed?.sub;

const getUserEmail = () => keycloak.tokenParsed?.email;

const hasRole = (roles: string[]) =>
  roles.some((role: string) => keycloak.hasResourceRole(role));

const getLocation = () => keycloak.tokenParsed?.location;

keycloak.onTokenExpired = () => {
  keycloak.updateToken(5);
};

keycloak.onAuthSuccess = () => {
  storeToken(keycloak.token);
};

keycloak.onAuthRefreshSuccess = () => {
  storeToken(keycloak.token);
};

keycloak.onAuthLogout = () => sessionStorage.clear();

const KeycloakService = {
  storeToken,
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  getFullname,
  getSub,
  getUserEmail,
  hasRole,
  getLocation,
};

export default KeycloakService;
