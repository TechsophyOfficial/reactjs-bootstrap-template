import { combineReducers } from "redux";
import notificationAlert from "./NotificationState";
import updateTheme from "./ThemeState";

export default combineReducers({
  notificationAlert,
  updateTheme,
});
