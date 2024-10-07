import { PaletteMode } from "@mui/material";

export const SAVE_THEME_DATA = "SAVE_THEME_DATA";

export interface ThemeData {
  mode: PaletteMode;
  primary: string;
  primaryLight: string;
  secondary: string;
  error: string;
}

export type ThemeEvent = {
  type: typeof SAVE_THEME_DATA;
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
    case SAVE_THEME_DATA:
      return {
        ...event.data,
      };
    default:
      return state;
  }
};
