import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export const useEnvGroups = (projectId: string) => {
  return useQuery({
    queryKey: ["envGroup"],
    queryFn: async () => {
      try {
        const url = `/groups/${projectId}/`;
        const resp = await privateApiClient({ url });
        return resp.data?.groups as Promise<
          Array<{
            createdAt: string;
            groupId: string;
            groupName: string;
            projectId: string;
            variables: Array<{
              [key: string]: string;
            }>;
          }>
        >;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
