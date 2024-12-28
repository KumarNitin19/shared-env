import { RouterProvider } from "react-router-dom";
import router from "./routes";
// import { Toaster } from "./atoms/Toaster";
import { Box } from "./atoms/Box";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { getTheme } from "./theme";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => getTheme(mode), []);

  return (
    <Box className="App" height="100%" width="full">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <Toaster /> */}
      </ThemeProvider>
    </Box>
  );
}

export default App;
