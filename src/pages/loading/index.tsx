import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../molecules/auth/utils/firebase";
import useLocalStorage from "../../hooks/useLocalStorage";
import { logout } from "../../query/userQuery";
import { useNavigate } from "react-router-dom";
import Loader from "../../molecules/loader";

const Loading = () => {
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user?.getIdToken();
        setItem("userDetails", { ...user?.providerData[0], idToken });
        navigate("/dashboard");
      } else {
        logout();
      }
    });
  }, []);

  return <Loader loader={true} fullPage />;
};

export default Loading;
