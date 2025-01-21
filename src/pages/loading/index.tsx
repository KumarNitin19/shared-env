import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../molecules/auth/utils/firebase";
import useLocalStorage from "../../hooks/useLocalStorage";
import { logout } from "../../query/userQuery";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user?.providerData[0]);
      if (user) {
        setItem("userDetails", user?.providerData[0]);
        navigate("/dashboard");
      } else {
        logout();
      }
    });
  }, []);

  return <div>Loading...</div>;
};

export default Loading;
