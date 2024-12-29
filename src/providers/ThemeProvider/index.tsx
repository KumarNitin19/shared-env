import { createContext, ReactNode, useCallback, useState } from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const [mode, setMode] = useState<ThemeMode>(savedTheme || "light");

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = useCallback(
    (mode: ThemeMode) => {
      setMode(mode);
      localStorage.setItem("theme", mode); // Save the theme to localStorage
    },
    [mode]
  );
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
