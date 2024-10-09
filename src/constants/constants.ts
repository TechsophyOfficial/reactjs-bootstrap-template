const CONSTANTS = {
  WELCOME_MSG: "welcome_msg",
  COMPONENT_LIST_MSG: "component_list_msg",
  DEFAULT_MSG: "default_msg",
  PROFILE_MSG: "profile_msg",
  SXP_TITLE: "Welcome to TSF React base project",
  SXP_SUBTITLE: "Service eXperience Platform",
  SXP_DEFAULT_MSG: "Hi, Welcome To React Template Project",
  COULDNT_UPLOAD_DOC: "Could not upload Document",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  SELECT_START_END_DATE: "Select start date and end date",

  SETTINGS: "settings",
  PROFILE: "profile",
  LOGOUT: "logout",
  THEME: "theme",
  VERSION_ID: "WORKING",

  BUSINESS_USER: "business-user",
  USER_EMAIL: "user-email",
  FIRST_NAME: "first-name",
  LAST_NAME: "last-name",
  USER_ID: "user-id",
  REACT_TOKEN: "react-token",
  USER_TYPE: "user-type",
  COUNTRY: "country",
  I18NEXTLNG: "i18nextLng",

  TOKEN_MIN_VALIDITY: 50,
};

export const AUTH_SERVER_URL = process.env?.REACT_APP_KEYCLOAK_URL || "";
export const CLIENT_ID = process.env?.REACT_APP_KEYCLOAK_CLIENT_ID || "";
export const REALM = process.env?.REACT_APP_KEYCLOAK_REALM || "";

export default CONSTANTS;
