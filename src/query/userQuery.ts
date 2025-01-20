import { useMutation } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

// Example of get api call
export function useSignIn() {
  const url = "/signin/";
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: async (): Promise<{ user: string }> =>
      await privateApiClient({ url }),
  });
}
