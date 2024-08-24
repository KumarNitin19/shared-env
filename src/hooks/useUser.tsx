import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { LoggedInUser } from "../types/loggedInUser.type";

export default function useUser() {
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser>(null);
  const { getItem } = useLocalStorage();
  const user: LoggedInUser = getItem("userDetails");

  useEffect(() => {
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return loggedInUser;
}
