import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import useLocalStorage from "../../hooks/useLocalStorage";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../molecules/auth/utils/firebase";

const LoginContainer = () => {
  const navigate = useNavigate();

  const { setItem } = useLocalStorage();

  const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        console.log(result);
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

        navigate("/");
      })
      .catch((_error) => {});
  };
  return <SignIn onSignUp={signInWithGooglePopup} />;
};

export default LoginContainer;
