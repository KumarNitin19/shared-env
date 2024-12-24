import { createTheme } from "@mui/material";
import SatoshiFont from "./fonts/Satoshi-Variable.ttf";

export const theme = createTheme({
  typography: {
    fontFamily: "Satoshi",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Satoshi",
          src: `url(${SatoshiFont}) format("truetype")`,
        },
      },
    },
  },
});
