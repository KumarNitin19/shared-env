import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export const useEnvGroups = () => {
  return useQuery({
    queryKey: ["envGroup"],
    queryFn: async (projectId) => {
      try {
        const url = `/groups/${projectId}/`;
        const resp = await privateApiClient({ url });
        console.log(resp);
        return resp.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
