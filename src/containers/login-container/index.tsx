import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  GithubAuthProvider,
  IdTokenResult,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, githubProvider } from "../../molecules/auth/utils/firebase";
import { useSignIn } from "../../query/userQuery";
import Loader from "../../molecules/loader";
import { useState } from "react";
import useSnackbar from "../../hooks/useSnackbar";

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateAsync: signIn } = useSignIn();
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const { addAlert } = useSnackbar();

  //Sign-in with google and verify with backend
  const signInWithGithubPopup = () => {
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then(async (result) => {
        try {
          const user = result.user;
          const userClaims: IdTokenResult = await user.getIdTokenResult();
          const res = await signIn();

          const credential = GithubAuthProvider.credentialFromResult(result);
          const accessToken = credential?.accessToken;
          console.log(accessToken);
          if (res?.user) {
            setItem("userDetails", {
              ...res?.user,
              idToken: userClaims?.token,
            });
            if (userClaims?.claims.varVaultPrivateKey) {
              navigate("/dashboard");
            } else {
              navigate("/generate-private-key");
            }
            addAlert({
              message: "Logged In successfully!!",
              variant: "filled",
              type: "success",
            });
          }
        } catch (error) {
          await signOut(auth);
          addAlert({
            message: "Login failed, try again!!",
            variant: "filled",
            type: "error",
          });
        } finally {
          setIsLoading(false);
        }
      })
      .catch((_error) => {});
  };

  return (
    <>
      <SignIn onSignUp={signInWithGithubPopup} />
      <Loader loader={isLoading} fullPage />
    </>
  );
};

export default LoginContainer;
