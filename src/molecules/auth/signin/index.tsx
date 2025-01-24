import LOGO_DARK from "../../../assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../assets/images/varvault-light.svg";
import { Box } from "../../../atoms/Box";
import { Typography } from "../../../atoms/Typography";
import BACKGROUD_IMAGE from "../../../assets/images/bg-pattern.png";
import CARD_BACKGROUND_LIGHT from "../../../assets/images/sign-in-card-bg.svg";
import CARD_BACKGROUND_DARK from "../../../assets/images/sign-in-card-bg-dark.svg";
import { useThemeToggle } from "../../../hooks/useThemeToggle";
import { useTheme } from "@mui/material/styles";
import { ToggleThemeIcon } from "../../toggle-theme-button";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { ThemeEnum } from "../../../providers/ThemeProvider";

const styles = {
  signInWithGithubBtn: (theme: string) => ({
    display: "flex",
    gap: 1.5,
    mt: 3,
    px: 4,
    "& svg": {
      height: 20,
      width: 20,
      "& path": {
        fill: theme === ThemeEnum.DARK ? "#000000" : "#ffffff",
      },
    },
    "&.MuiButton-contained": {
      backgroundColor: theme === ThemeEnum.LIGHT ? "#000000" : "#ffffff",
      color: theme === ThemeEnum.LIGHT ? "#ffffff" : "#000000",
    },
  }),

  signInContainer: {
    backgroundImage: `url(${BACKGROUD_IMAGE})`,
    backgroundSize: "cover",
  },
  signInCard: (theme: string) => ({
    backgroundImage: `url(${
      theme === ThemeEnum.LIGHT ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK
    })`,
    backgroundSize: "cover",
    backdropFilter: "blur(62px)",
    minHeight: 348,
  }),
};

type SignInProps = {
  onSignUp: () => void;
};

function SignIn({ onSignUp }: SignInProps) {
  const theme = useTheme();
  const { mode } = useThemeToggle();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      bgcolor={theme.palette.mainBackground.main}
      sx={styles.signInContainer}>
      <Box
        display="flex"
        flexDirection="column"
        width={566}
        height={348}
        alignItems="center"
        justifyContent="center"
        gap={3}
        sx={styles.signInCard(mode)}>
        <img
          src={mode === ThemeEnum.LIGHT ? LOGO_DARK : LOGO_LIGHT}
          alt="varvault_logo"
        />
        <Typography
          variant="h4"
          fontWeight={700}
          color={theme.palette.surface100.main}>
          VarVault
        </Typography>
        <Typography textAlign="center" color={theme.palette.surface80.main}>
          One stop platform for all your <br /> environment credentials
        </Typography>
        <Button
          variant="contained"
          onClick={onSignUp}
          sx={styles.signInWithGithubBtn(mode)}>
          <Icon icon="logos:github-icon" />
          Sign In With Github
        </Button>
      </Box>
      <Box position="absolute" top={0} right={0} m={2} p={1} borderRadius={2}>
        <ToggleThemeIcon />
      </Box>
    </Box>
  );
}

export default SignIn;
