import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import { useToast } from "../../hooks/use-toast";
import useLocalStorage from "../../hooks/useLocalStorage";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../molecules/auth/utils/firebase";

export const LoginContainer = () => {
  const navigate = useNavigate();

  const { toast } = useToast();

  const { setItem } = useLocalStorage();

  const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const user = result.user;
        const token = await user.getIdToken();
        console.log(token);
        setItem(
          "userDetails",
          JSON.stringify({
            access_token: token,
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
      });
  };
  return <SignIn onSignUp={signInWithGooglePopup} />;
};
