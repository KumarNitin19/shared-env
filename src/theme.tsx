import { createTheme } from "@mui/material";
import SatoshiFont from "./fonts/Satoshi-Variable.ttf";

export const theme = createTheme({
  typography: {
    fontFamily: "Satoshi",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Satoshi';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Satoshi'), local('Satoshi-Variable'), url(${SatoshiFont}) format('truetype');
        }
      `,
    },
  },
});
