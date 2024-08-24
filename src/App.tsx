import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "./molecules/core/design-system/ui/toaster";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
