import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { User } from "../types/user.type";

export default function useUser() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const { getItem } = useLocalStorage();
  const user: User = getItem("userDetails");

  useEffect(() => {
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return loggedInUser;
}
