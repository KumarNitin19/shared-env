import { createTheme } from "@mui/material";
import SatoshiFont from "./fonts/Satoshi-Variable.ttf"
import OutfitFont from "./fonts/Outfit-Variable.ttf"
import { darkThemePalette, lightThemePalette } from "./config/colorConfig";

const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: mode === "light" ? lightThemePalette : darkThemePalette,
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
  })
}

export { getTheme }