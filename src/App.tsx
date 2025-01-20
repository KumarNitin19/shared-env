import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Box } from "./atoms/Box";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { getTheme } from "./theme";
import { useThemeToggle } from "./hooks/useThemeToggle";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const { mode } = useThemeToggle();
  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <Box className="App" height="100%" width="full">
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </MuiThemeProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
