import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Box } from "./atoms/Box";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { getTheme } from "./theme";
import { useThemeToggle } from "./hooks/useThemeToggle";

function App() {
  const { mode } = useThemeToggle();
  const theme = useMemo(() => getTheme(mode), [mode]);

  console.log(theme, mode);

  return (
    <Box className="App" height="100%" width="full">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </MuiThemeProvider>
    </Box>
  );
}

export default App;
