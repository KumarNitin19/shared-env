import { Button } from "../../../core/design-system/ui/button";
import { auth, googleAuthProvider } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../core/design-system/ui/use-toast";
import useLocalStorage from "../../../../hooks/useLocalStorage";

function SignIn() {
  const navigate = useNavigate();

  const { toast } = useToast();

  const { setItem } = useLocalStorage();

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
      <div className="w-[566px] h-[348px] flex flex-col items-center justify-center gap-6 rounded-md bg-sign-in-card bg-cover backdrop-blur-sm">
        <img src="/varvault_dark.svg" alt="varvault_logo" />
        <span className="text-4xl font-bold">VarVault</span>
        <span className="text-center">
          One stop platform for all your <br /> environment credentials
        </span>
        <Button
          onClick={signInWithGooglePopup}
          className="mt-6 px-8 flex gap-3"
        >
          <Icon icon="logos:google-icon" className="h-5 w-5" />
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
