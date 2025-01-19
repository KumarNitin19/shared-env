import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export function useProjects() {
  const url = "/projects";
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => privateApiClient({ url }) as Promise<unknown>,
  });
}
