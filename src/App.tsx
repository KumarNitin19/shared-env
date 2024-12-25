import { RouterProvider } from "react-router-dom";
import router from "./routes";
// import { Toaster } from "./atoms/Toaster";
import { Box } from "./atoms/Box";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
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
