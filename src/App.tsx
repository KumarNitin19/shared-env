import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "./atoms/Toaster";
import { ThemeProvider } from "./providers/theme-providers";

function App() {
  return (
    <div className="App">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
