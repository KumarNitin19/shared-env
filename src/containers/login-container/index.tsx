import { useNavigate } from "react-router-dom";
import SignIn from "../../molecules/auth/signin";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  GithubAuthProvider,
  IdTokenResult,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  githubProvider,
  googleAuthProvider,
} from "../../molecules/auth/utils/firebase";
import { logout, useSignIn } from "../../query/userQuery";

const LoginContainer = () => {
  const { mutateAsync: signIn } = useSignIn();
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();

  //Sign-in with google and verify with backend
  const signInWithGithubPopup = () => {
    signInWithPopup(auth, githubProvider)
      .then(async (result) => {
        try {
          const user = result.user;
          const userClaims: IdTokenResult = await user.getIdTokenResult();
          const res = await signIn();
          if (res?.user) {
            setItem("userDetails", {
              ...res?.user,
              userToken: userClaims?.token,
            });
            if (userClaims?.claims.varVaultPrivateKey) {
              navigate("/dashboard");
            } else {
              navigate("/generate-private-key");
            }
          }
        } catch (error) {
          await logout();
        }
      })
      .catch((_error) => {});
  };

  return <SignIn onSignUp={signInWithGithubPopup} />;
};

export default LoginContainer;
