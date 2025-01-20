import { useMutation } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { signOut } from "firebase/auth";
import { auth } from "../molecules/auth/utils/firebase";

// Example of get api call
export function useSignIn() {
  const url = "/signin/";
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: async (): Promise<{ user: string }> =>
      await privateApiClient({ url }),
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
