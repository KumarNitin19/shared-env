import { useTheme } from "@mui/material";
import { Box } from "../../atoms/Box";
import { Icon } from "../../atoms/Icon";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { ThemeEnum } from "../../providers/ThemeProvider";

type LoaderProps = {
  fullPage?: boolean;
  size?: number;
  loader: boolean;
};

const Loader = ({
  loader = false,
  fullPage = false,
  size = 48,
}: LoaderProps) => {
  const theme = useTheme();
  const { mode } = useThemeToggle();

  if (!loader) return;

  if (fullPage) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        height="100%"
        width="100%"
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgcolor={mode === ThemeEnum.LIGHT ? "#ffffff80" : "#00000080"}
        zIndex={9999}>
        <Icon
          icon="svg-spinners:eclipse"
          fontSize={size}
          color={theme.palette.primary.main}
        />
      </Box>
    );
  }
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Icon
        icon="svg-spinners:eclipse"
        fontSize={size}
        color={theme.palette.primary.main}
      />
    </Box>
  );
};

export default Loader;
