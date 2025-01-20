import { useMutation } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { signOut } from "firebase/auth";
import { auth } from "../molecules/auth/utils/firebase";
import { User } from "../types/user.type";

// Example of get api call
export function useSignIn() {
  const url = "/signin/";
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: async (): Promise<{ message: string; user?: User }> => {
      try {
        const res = await privateApiClient({ url });
        return res.data;
      } catch (error) {
        return { message: error as string };
      }
    },
  });
}

export async function logout() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userDetails");
      window.location.pathname = "/sign-in";
    })
    .catch((error) => {
      console.error(error);
    });
}
