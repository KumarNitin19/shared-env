import { useState } from "react";

export type ThemeMode = "light" | "dark";

export const useThemeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = (mode: ThemeMode) => {
    setMode(mode);
  };
  return { mode, toggleTheme };
};
