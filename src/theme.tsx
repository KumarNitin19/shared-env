import { createTheme } from "@mui/material";
import SatoshiFont from "./fonts/Satoshi-Variable.ttf";
import OutlineFont from "./fonts/Outfit-Variable.ttf";

export const theme = createTheme({
  typography: {
    fontFamily: "Satoshi",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face: {
          font-family: 'Satoshi',
          src: url(${SatoshiFont}) format("truetype"),
        },
        @font-face: {
            font-family: 'Outline',
            src: url(${OutlineFont}) format("truetype"),
          },

          
         `,
    },
  },
});
