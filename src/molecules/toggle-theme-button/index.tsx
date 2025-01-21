import { useTheme } from "@mui/material/styles";
import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Icon } from "../../atoms/Icon";
import { ThemeEnum } from "../../providers/ThemeProvider";

const styles = {
  lightIcon: (mode: string) => ({
    transition: "all 0.3s",
    transform: mode === ThemeEnum.LIGHT ? "rotate(0deg)" : "rotate(90deg)",
    height: 20,
    width: 20,
    scale: mode === ThemeEnum.LIGHT ? "100%" : 0,
    cursor: "pointer",
  }),
  darkIcon: (mode: string) => ({
    position: "absolute",
    transform: mode === ThemeEnum.DARK ? "rotate(0deg)" : "rotate(90deg)",
    transition: "all 0.3s",
    height: 20,
    width: 20,
    scale: mode === ThemeEnum.DARK ? "100%" : 0,
    cursor: "pointer",
  }),
};

export const ToggleThemeIcon = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeToggle();
  return (
    <>
      <Box
        onClick={() => toggleTheme(ThemeEnum.LIGHT)}
        sx={styles.darkIcon(mode)}>
        <Icon
          icon="basil:moon-outline"
          color={theme.palette.surface80.main}
          fontSize={20}
        />
      </Box>
      <Box
        onClick={() => toggleTheme(ThemeEnum.DARK)}
        sx={styles.lightIcon(mode)}>
        <Icon
          icon="uil:sun"
          color={theme.palette.surface80.main}
          fontSize={20}
        />
      </Box>
    </>
  );
};
