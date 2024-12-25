import { createTheme } from "@mui/material";
import SatoshiFont from "./fonts/Satoshi-Variable.ttf"
import OutfitFont from "./fonts/Outfit-Variable.ttf"

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Satoshi';
          src: url(${SatoshiFont}) format('truetype');
        }
        
        @font-face {
          font-family: 'Outfit';
          src: url(${OutfitFont}) format('truetype');
        }
      `,
    },
  },
  typography: {
    fontFamily: "Satoshi",
  },

});
