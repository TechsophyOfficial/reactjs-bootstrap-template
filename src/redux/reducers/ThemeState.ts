import { PaletteMode } from "@mui/material";

export interface ThemeData {
  mode: PaletteMode;
  primary: string;
  primaryLight: string;
  secondary: string;
  error: string;
}

export type ThemeEvent = {
  type: "SAVE_THEME_DATA";
  data: ThemeData;
};

export const initialThemeState: ThemeData = {
  mode: "light",
  primary: "#1B4F72",
  primaryLight: "#000000DD",
  secondary: "#000036",
  error: "#f17b7b",
};

export default (
  state: ThemeData = initialThemeState,
  event: ThemeEvent
): ThemeData => {
  switch (event.type) {
    case "SAVE_THEME_DATA":
      return {
        ...state,
        mode: event.data.mode,
        primary: event.data.primary,
        primaryLight: event.data.primaryLight,
        secondary: event.data.secondary,
        error: event.data.error,
      };
    default:
      return state;
  }
};
