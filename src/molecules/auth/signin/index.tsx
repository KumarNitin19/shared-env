import LOGO_DARK from "../../../assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../assets/images/varvault-light.svg";
import { Button, Icon } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import { Typography } from "../../../atoms/Typography";
import BACKGROUD_IMAGE from "../../../assets/images/bg-pattern.png";
import CARD_BACKGROUND_LIGHT from "../../../assets/images/sign-in-card-bg.svg";
import CARD_BACKGROUND_DARK from "../../../assets/images/sign-in-card-bg-dark.svg";
import { useThemeToggle } from "../../../hooks/useThemeToggle";
import { useTheme } from "@mui/material";

const styles = {
  signInWithGoogleBtn: (theme: string) => ({
    display: "flex",
    gap: 1.5,
    mt: 3,
    px: 4,
    "& svg": {
      height: 20,
      width: 20,
    },
    "&.MuiButton-contained": {
      backgroundColor: theme === "light" ? "#000000" : "#ffffff",
      color: theme === "light" ? "#ffffff" : "#000000",
    },
  }),
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
  signInContainer: {
    backgroundImage: `url(${BACKGROUD_IMAGE})`,
    backgroundSize: "cover",
  },
  signInCard: (theme: string) => ({
    backgroundImage: `url(${
      theme === "light" ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK
    })`,
    backgroundSize: "cover",
    backdropFilter: "blur(62px)",
  }),
};

type SignInProps = {
  onSignUp: () => void;
};

function SignIn({ onSignUp }: SignInProps) {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeToggle();
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
          src={mode === "light" ? LOGO_DARK : LOGO_LIGHT}
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
          sx={styles.signInWithGoogleBtn(mode)}>
          <Icon icon="logos:google-icon" />
          Sign In With Google
        </Button>
      </Box>
      <Box
        position="absolute"
        top={0}
        right={0}
        m={2}
        p={1}
        borderRadius={2}
        onClick={() => toggleTheme(mode === "light" ? "dark" : "light")}>
        <Box sx={styles.darkIcon(mode)}>
          <Icon icon="basil:moon-outline" color="#ffffff" fontSize={20} />
        </Box>
        <Box sx={styles.lightIcon(mode)}>
          <Icon icon="uil:sun" fontSize={20} />
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
