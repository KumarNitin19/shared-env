import { RouterProvider } from "react-router-dom";
import router from "./routes";
// import { Toaster } from "./atoms/Toaster";
import { ThemeProvider } from "./providers/theme-providers";
import { Box } from "./atoms/Box";

function App() {
  return (
    <Box className="App" height="100%" width="full">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <Toaster /> */}
      </ThemeProvider>
    </Box>
  );
}

export default App;
