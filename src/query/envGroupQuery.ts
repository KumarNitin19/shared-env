import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useAddENVGroup = () => {
  return useMutation({
    mutationKey: ["addENVGroup"],
    mutationFn: async (formData: any) => {
      try {
        const url = "";
        const resp = await privateApiClient({
          url,
          data: formData,
          method: "POST",
        });
        return resp?.data as Promise<any>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
