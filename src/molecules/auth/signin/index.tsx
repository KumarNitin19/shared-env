import { useTheme } from "../../../providers/theme-providers";
import LOGO_DARK from "../../../assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../assets/images/varvault-light.svg";
import { Button, Icon } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import { Typography } from "../../../atoms/Typography";
import BACKGROUD_IMAGE from "../../../assets/images/bg-pattern.png";

const styles = {
  signInWithGoogleBtn: {
    display: "flex",
    gap: 1.5,
    mt: 3,
    px: 4,
    "& svg": {
      height: 20,
      width: 20,
    },
  },
  lightIcon: (theme: string) => ({
    transition: "all 0.3s",
    transform: theme === "light" ? "rotate(0deg)" : "rotate(90deg)",
    height: 20,
    width: 20,
    scale: theme === "light" ? "100%" : 0,
    cursor: "pointer",
  }),
  darkIcon: (theme: string) => ({
    position: "absolute",
    transform: theme === "dark" ? "rotate(0deg)" : "rotate(90deg)",
    transition: "all 0.3s",
    height: 20,
    width: 20,
    scale: theme === "dark" ? "100%" : 0,
    cursor: "pointer",
  }),
  signInContainer: {
    backgroundImage: `url(${BACKGROUD_IMAGE})`,
    backgroundSize: "cover",
  },
};

type SignInProps = {
  onSignUp: () => void;
};

function SignIn({ onSignUp }: SignInProps) {
  const { theme, setTheme } = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      sx={styles.signInContainer}>
      <Box
        display="flex"
        flexDirection="column"
        width={566}
        height={348}
        alignItems="center"
        justifyContent="center"
        gap={3}
        borderRadius={1.5}
        border={1}>
        <img
          src={theme === "light" ? LOGO_DARK : LOGO_LIGHT}
          alt="varvault_logo"
        />
        <Typography variant="h4" fontWeight={700}>
          VarVault
        </Typography>
        <Typography textAlign="center">
          One stop platform for all your <br /> environment credentials
        </Typography>
        <Button
          variant="outlined"
          onClick={onSignUp}
          sx={styles.signInWithGoogleBtn}>
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
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Box sx={styles.darkIcon(theme)}>
          <Icon icon="basil:moon-outline" fontSize={20} />
        </Box>
        <Box sx={styles.lightIcon(theme)}>
          <Icon icon="uil:sun" fontSize={20} />
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
