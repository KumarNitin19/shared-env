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
