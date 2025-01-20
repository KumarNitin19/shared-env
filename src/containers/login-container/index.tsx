import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IdTokenResult, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../molecules/auth/utils/firebase";
import { useSignIn } from "../../query/userQuery";

const LoginContainer = () => {
  const { mutateAsync: signIn } = useSignIn();
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();

  //Sign-in with google and verify with backend
  const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const user = result.user;
        const userClaims: IdTokenResult = await user.getIdTokenResult();
        const res = await signIn();
        console.log(res);
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
