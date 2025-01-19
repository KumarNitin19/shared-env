import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export function useEnvironmentGroup() {
  const url = "/environment-group/";
  return useQuery({
    queryKey: ["environmentGroup"],
    queryFn: async () => privateApiClient({ url }) as Promise<unknown>,
  });
}
