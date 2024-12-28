import { useState } from "react";

export const useThemeToggle = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return { mode, toggleTheme };
};
