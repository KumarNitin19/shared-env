import { useMutation, useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export const useEnvGroups = (projectId: string) => {
  return useQuery({
    queryKey: ["envGroup", projectId],
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
    mutationFn: async (formData: {
      projectId: string;
      groupName: string;
      variables: Array<{
        [key: string]: string;
      }>;
    }) => {
      try {
        const url = "/add-group/";
        const resp = await privateApiClient({
          url,
          data: formData,
          method: "POST",
        });
        console.log(resp?.data);
        return resp?.data as Promise<any>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
