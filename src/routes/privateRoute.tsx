import { Navigate } from "react-router-dom";
import { memo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { getItem } = useLocalStorage();
  const user = getItem("userDetails");
  return user ? children : <Navigate to="/sign-in" />;
}

export default memo(PrivateRoute);
