import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IdTokenResult, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../molecules/auth/utils/firebase";

const LoginContainer = () => {
  const navigate = useNavigate();

  const { setItem } = useLocalStorage();

  const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const user = result.user;
        const userClaims: IdTokenResult = await user.getIdTokenResult();
        setItem(
          "userDetails",
          JSON.stringify({
            access_token: userClaims?.token,
            email: user.email,
            display_name: user.displayName,
            profile_image: user.photoURL,
          })
        );
        if (userClaims?.claims.varVaultId) {
          navigate("/dashboard");
        } else {
          navigate("/generate-private-key");
        }
      })
      .catch((_error) => {});
  };
  return <SignIn onSignUp={signInWithGooglePopup} />;
};

export default LoginContainer;
