import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

// Example of get api call
export function useSignIn() {
  const url = "/signin";
  return useQuery({
    queryKey: ["user-signin"],
    queryFn: async () => privateApiClient({ url }) as Promise<unknown>,
  });
}
