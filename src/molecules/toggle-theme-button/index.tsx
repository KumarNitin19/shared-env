import { useTheme } from "@mui/material";
import { Icon } from "../../atoms";
import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";

const styles = {
  lightIcon: (mode: string) => ({
    transition: "all 0.3s",
    transform: mode === "light" ? "rotate(0deg)" : "rotate(90deg)",
    height: 20,
    width: 20,
    scale: mode === "light" ? "100%" : 0,
    cursor: "pointer",
  }),
  darkIcon: (mode: string) => ({
    position: "absolute",
    transform: mode === "dark" ? "rotate(0deg)" : "rotate(90deg)",
    transition: "all 0.3s",
    height: 20,
    width: 20,
    scale: mode === "dark" ? "100%" : 0,
    cursor: "pointer",
  }),
};

export const ToggleThemeIcon = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeToggle();
  return (
    <>
      <Box onClick={() => toggleTheme("light")} sx={styles.darkIcon(mode)}>
        <Icon
          icon="basil:moon-outline"
          color={theme.palette.surface80.main}
          fontSize={20}
        />
      </Box>
      <Box onClick={() => toggleTheme("dark")} sx={styles.lightIcon(mode)}>
        <Icon
          icon="uil:sun"
          color={theme.palette.surface80.main}
          fontSize={20}
        />
      </Box>
    </>
  );
};
