import { useTheme } from "@mui/material";
import COMPUTER_HANDS_DARK from "../../../assets/images/computer-hands-dark.svg";
import COMPUTER_HANDS_LIGHT from "../../../assets/images/computer-hands-light.svg";
import { Box } from "../../../atoms/Box";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { Typography } from "../../../atoms/Typography";
import { useThemeToggle } from "../../../hooks/useThemeToggle";
import { ThemeEnum } from "../../../providers/ThemeProvider";

type ComponentProps = {
  handleOpenAddProject: () => void;
};

function DashboardPageZeroState({ handleOpenAddProject }: ComponentProps) {
  const theme = useTheme();
  const { mode } = useThemeToggle();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      margin="auto"
      height="100%">
      <img
        src={
          mode === ThemeEnum.LIGHT ? COMPUTER_HANDS_DARK : COMPUTER_HANDS_LIGHT
        }
        alt="computer-hands"
      />
      <Typography
        fontWeight={500}
        fontSize={28}
        color={theme.palette.surface100.main}>
        Welcome to VarVault
      </Typography>
      <Typography fontSize={16} color={theme.palette.surface80.main}>
        Ready to dive in? Start your first <br /> project now
      </Typography>
      <Box mt={3}>
        <Button
          startIcon={<Icon icon="fluent:add-16-regular" />}
          onClick={handleOpenAddProject}>
          Create Project
        </Button>
      </Box>
    </Box>
  );
}

export default DashboardPageZeroState;
