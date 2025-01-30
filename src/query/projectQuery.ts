import { useMutation, useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { AddProjectType, ProjectData } from "../types/project.type";

export function useProjects() {
  const url = "/projects/";
  return useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<Array<ProjectData>> => {
      try {
        const res = await privateApiClient({ url });
        return res?.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
}

export function useAddProject() {
  const url = "/add-project/";
  return useMutation({
    mutationKey: ["addProject"],
    mutationFn: async (projectDetail: AddProjectType) => {
      try {
        const res = await privateApiClient({
          url,
          method: "POST",
          data: projectDetail,
        });
        return res?.data as Promise<{
          message: string;
          projectId: string;
        }>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
}

export function useEditProject() {
  return useMutation({
    mutationKey: ["editProject"],
    mutationFn: async ({
      projectId,
      projectDetail,
    }: {
      projectId: string;
      projectDetail: AddProjectType;
    }) => {
      const url = `/project/${projectId}`;
      try {
        const res = await privateApiClient({
          url,
          method: "PUT",
          data: projectDetail,
        });
        return res?.data as Promise<{
          message: string;
          projectId: string;
        }>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
}

export function useDeleteProject() {
  return useMutation({
    mutationKey: ["deleteProject"],
    mutationFn: async (projectId: string) => {
      const url = `/delete-project/${projectId}`;
      try {
        const res = await privateApiClient({ url, method: "DELETE" });
        return res.data as Promise<{
          message: string;
          projectId: string;
        }>;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
}
