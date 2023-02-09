import { createTheme } from "@mui/material/styles";
import SIZE from "./font_size.json";
import { Theme } from "@mui/material/styles";

const primary = "#025e5e";
const primaryLight = "#95CBF7";
const secondary = "#fff";
const error = "#f17b7b";

declare module "@mui/system" {
  interface DefaultTheme extends Theme {}
}

export const INITIAL_THEME = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
  },
});
