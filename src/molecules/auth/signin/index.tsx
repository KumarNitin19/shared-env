import { useTheme } from "../../../providers/theme-providers";
import LOGO_DARK from "../../../assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../assets/images/varvault-light.svg";
import SignInWithGoogleButton from "../signin-with-google-btn";
import { Icon } from "../../../atoms";

function SignIn() {
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
        <SignInWithGoogleButton />
      </div>
      <div
        className="absolute top-0 right-0 m-4 p-2 flex border rounded-xl text-subtle hover:text-foreground cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Icon
          icon="uil:sun"
          className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          icon="basil:moon-outline"
          className="absolute w-5 h-5  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </div>
    </div>
  );
}

export default SignIn;
