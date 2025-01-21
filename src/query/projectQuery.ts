import { useMutation, useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export function useProjects() {
  const url = "/projects/";
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => privateApiClient({ url }) as Promise<Array<unknown>>,
  });
}

export function useAddProject() {
  const url = "/add-project/";
  return useMutation({
    mutationFn: async (projectDetail: unknown) => {
      return privateApiClient({ url, method: "POST", data: projectDetail });
    },
  });
}
