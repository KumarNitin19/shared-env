import { createTheme } from "@mui/material/styles";
import SatoshiFont from "./fonts/Satoshi-Variable.ttf";
import OutfitFont from "./fonts/Outfit-Variable.ttf";
import { darkThemePalette, lightThemePalette } from "./config/colorConfig";
import { ThemeEnum } from "./providers/ThemeProvider";

const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: mode === ThemeEnum.LIGHT ? lightThemePalette : darkThemePalette,
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
};

export { getTheme };
