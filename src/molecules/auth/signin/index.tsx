import { useTheme } from "../../../providers/theme-providers";
import LOGO_DARK from "../../../assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../assets/images/varvault-light.svg";
import { Button, Icon } from "../../../atoms";
import { Box } from "../../../atoms/Box";

//  icon="uil:sun"
//     className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
//   />
//   <Icon
//     icon="basil:moon-outline"
//     className="absolute w-5 h-5  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"

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
};

type SignInProps = {
  onSignUp: () => void;
};

function SignIn({ onSignUp }: SignInProps) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-pattern bg-cover">
      <div className="w-[566px] h-[348px] flex flex-col items-center justify-center gap-6 rounded-md bg-sign-in-card dark:bg-sign-in-card-dark backdrop-blur-sm">
        <img
          src={theme === "light" ? LOGO_DARK : LOGO_LIGHT}
          alt="varvault_logo"
        />
        <span className="text-4xl font-bold">VarVault</span>
        <span className="text-center text-subtle">
          One stop platform for all your <br /> environment credentials
        </span>
        <Button
          variant="outlined"
          onClick={onSignUp}
          sx={styles.signInWithGoogleBtn}>
          <Icon icon="logos:google-icon" />
          Sign In With Google
        </Button>
      </div>
      <Box
        position="absolute"
        top={0}
        right={0}
        m={2}
        p={1}
        borderRadius={2}
        // className="absolute top-0 right-0 m-4 p-2 flex border rounded-xl text-subtle hover:text-foreground cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Box sx={styles.darkIcon(theme)}>
          <Icon icon="basil:moon-outline" fontSize={20} />
        </Box>

        <Box sx={styles.lightIcon(theme)}>
          <Icon icon="uil:sun" fontSize={20} />
        </Box>
      </Box>
    </div>
  );
}

export default SignIn;
