import { Navigate } from "react-router-dom";
import { memo, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { auth } from "../molecules/auth/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { getItem } = useLocalStorage();
  const user = getItem("userDetails");

  useEffect(() => {
    if (auth?.currentUser) {
      auth?.currentUser
        ?.getIdToken(true) // Pass `true` to force refresh
        .then((idToken) => {
          console.log("Updated ID token with custom claims:", idToken);
        })
        .catch((error) => {
          console.error("Error fetching updated ID token:", error);
        });
    } else {
      onAuthStateChanged(auth, (user) => {
        console.log(user);
      });
    }
  }, [auth?.currentUser]);

  return user ? children : <Navigate to="/sign-in" />;
}

export default memo(PrivateRoute);
