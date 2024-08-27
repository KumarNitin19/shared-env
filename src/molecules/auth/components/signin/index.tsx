import { Button } from "../../../core/design-system/ui/button";
import { auth, googleAuthProvider } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../core/design-system/ui/use-toast";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { useTheme } from "../../../../providers/theme-providers";
import LOGO_DARK from "../../../..//assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../..//assets/images/varvault-light.svg";

function SignIn() {
  const navigate = useNavigate();

  const { toast } = useToast();

  const { setItem } = useLocalStorage();

  const { theme, setTheme } = useTheme();

  const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        console.log({ token }, { user });

        setItem(
          "userDetails",
          JSON.stringify({
            access_token: user.getIdToken(),
            email: user.email,
            display_name: user.displayName,
            profile_image: user.photoURL,
          })
        );

        toast({
          description: `${user.displayName} logged in successfully.`,
        });
        navigate("/");
      })
      .catch((_error) => {
        toast({
          description: `Something went wrong, please try again.`,
        });
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-pattern bg-cover">
      <div className="w-[566px] h-[348px] flex flex-col items-center justify-center gap-6 rounded-md bg-sign-in-card dark:bg-sign-in-card-dark backdrop-blur-sm">
        <img
          src={theme === "light" ? LOGO_DARK : LOGO_LIGHT}
          alt="varvault_logo"
        />
        <span className="text-4xl font-bold text-default">VarVault</span>
        <span className="text-center text-subtle">
          One stop platform for all your <br /> environment credentials
        </span>
        <Button
          onClick={signInWithGooglePopup}
          className="mt-6 px-8 flex gap-3 bg-black text-white dark:bg-white dark:text-black"
        >
          <Icon icon="logos:google-icon" className="h-5 w-5" />
          Sign In With Google
        </Button>
      </div>
      <div
        className="absolute top-0 right-0 m-4 p-2 flex border rounded-xl text-subtle hover:text-foreground cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
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
