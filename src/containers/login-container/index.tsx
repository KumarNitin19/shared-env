import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import { useToast } from "../../hooks/use-toast";
import useLocalStorage from "../../hooks/useLocalStorage";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../molecules/auth/utils/firebase";

export const LoginContainer = () => {
  const navigate = useNavigate();

  const { toast } = useToast();

  const { setItem } = useLocalStorage();

  const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
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
  return <SignIn onSignUp={signInWithGooglePopup} />;
};
