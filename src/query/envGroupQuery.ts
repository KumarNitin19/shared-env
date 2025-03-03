import { useMutation, useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { ENVGroup } from "../types/envGroup.type";

export const useEnvGroups = (projectId: string, varVaultPrivateKey: string) => {
  return useQuery({
    queryKey: ["envGroup", projectId],
    queryFn: async () => {
      try {
        const url = `/groups/${projectId}/`;
        const resp = await privateApiClient({
          url,
          headers: {
            ["varVault-private-key"]: varVaultPrivateKey,
          },
        });
        return resp.data?.groups as Promise<Array<ENVGroup>>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};

export const useAddENVGroup = () => {
  return useMutation({
    mutationKey: ["addENVGroup"],
    mutationFn: async ({
      formData,
      varVaultPrivateKey,
    }: {
      formData: {
        projectId: string;
        groupName: string;
        variables: Array<{
          [key: string]: string;
        }>;
      };
      varVaultPrivateKey: string;
    }) => {
      try {
        const url = "/add-group/";
        const resp = await privateApiClient({
          url,
          data: formData,
          method: "POST",
          headers: {
            ["varVault-private-key"]: varVaultPrivateKey,
          },
        });
        return resp?.data as Promise<any>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};

export const useUpdateENVGroup = () => {
  return useMutation({
    mutationKey: ["updateENVGroup"],
    mutationFn: async ({
      formData,
      groupId,
      varVaultPrivateKey,
    }: {
      groupId: string;
      formData: {
        projectId: string;
        groupName: string;
        variables: Array<{
          [key: string]: string;
        }>;
      };
      varVaultPrivateKey: string;
    }) => {
      try {
        const url = `/group/${groupId}`;
        const resp = await privateApiClient({
          url,
          data: formData,
          method: "PUT",
          headers: {
            ["varVault-private-key"]: varVaultPrivateKey,
          },
        });
        return resp?.data as Promise<any>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};

export const useDeleteENVGroup = () => {
  return useMutation({
    mutationKey: ["deleteENVGroup"],
    mutationFn: async (groupId: string) => {
      try {
        const url = `/delete-group/${groupId}`;
        const resp = await privateApiClient({
          url,
          method: "DELETE",
        });
        return resp?.data as Promise<any>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
