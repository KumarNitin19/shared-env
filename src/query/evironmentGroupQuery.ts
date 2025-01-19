import { useMutation, useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export function useEnvironmentGroup(projectId: string) {
  const url = `/${projectId}/environment-group/`;
  return useQuery({
    queryKey: ["environmentGroup"],
    queryFn: async () => privateApiClient({ url }) as Promise<unknown>,
  });
}

export function useAddEnvironmentGroup() {
  return useMutation({
    mutationFn: async ({
      projectId,
      environmentGroupData,
    }: {
      projectId: string;
      environmentGroupData: unknown;
    }) => {
      const url = `/add/environment-group/${projectId}`;
      return privateApiClient({
        url,
        method: "POST",
        data: environmentGroupData,
      }) as Promise<unknown>;
    },
  });
}
