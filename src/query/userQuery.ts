import { useMutation } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { signOut } from "firebase/auth";
import { auth } from "../molecules/auth/utils/firebase";
import { User } from "../types/user.type";

// Abstraction to sign-in
export function useSignIn() {
  const url = "/signin/";
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: async (): Promise<{ message: string; user?: User }> => {
      try {
        const res = await privateApiClient({ url });
        return res.data;
      } catch (error) {
        return Promise.reject({ message: error as string });
      }
    },
  });
}

export function useGeneratePrivateKey() {
  const url = "/generate-private-key/";
  return useMutation({
    mutationKey: ["generate-private-key"],
    mutationFn: async (): Promise<{ message: string; privateKey?: string }> => {
      try {
        const res = await privateApiClient({ url, method: "POST" });
        return res.data;
      } catch (error) {
        return {
          message: "Something went wrong, please try again!!",
        };
      }
    },
  });
}

// Abstraction to logout
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
