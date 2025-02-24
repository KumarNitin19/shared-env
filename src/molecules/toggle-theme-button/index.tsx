import { useTheme } from "@mui/material/styles";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Icon } from "../../atoms/Icon";
import { ThemeEnum } from "../../providers/ThemeProvider";
import IconButton from "@mui/material/IconButton";

const styles = {
  lightIcon: (mode: string) => ({
    transition: "all 0.3s",
    transform: mode === ThemeEnum.LIGHT ? "rotate(0deg)" : "rotate(90deg)",
    height: 20,
    width: 20,
    scale: mode === ThemeEnum.LIGHT ? "100%" : 0,
    cursor: "pointer",
    padding: 0,
  }),
  darkIcon: (mode: string) => ({
    position: "absolute",
    transform: mode === ThemeEnum.DARK ? "rotate(0deg)" : "rotate(90deg)",
    transition: "all 0.3s",
    height: 20,
    width: 20,
    scale: mode === ThemeEnum.DARK ? "100%" : 0,
    cursor: "pointer",
    padding: 0,
  }),
};

export const ToggleThemeIcon = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeToggle();
  return (
    <>
      <IconButton
        onClick={() => toggleTheme(ThemeEnum.LIGHT)}
        sx={styles.darkIcon(mode)}>
        <Icon
          icon="basil:moon-outline"
          color={theme.palette.surface80.main}
          fontSize={20}
        />
      </IconButton>
      <IconButton
        onClick={() => toggleTheme(ThemeEnum.DARK)}
        sx={styles.lightIcon(mode)}>
        <Icon
          icon="fluent:weather-sunny-16-regular"
          color={theme.palette.surface80.main}
          fontSize={20}
        />
      </IconButton>
    </>
  );
};
