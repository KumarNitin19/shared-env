import { useMutation, useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { GithubRepos } from "../types/project.type";

export const useGithubRepos = (githubAccessToken: string) => {
  return useQuery({
    queryKey: ["githubRepos"],
    queryFn: async (): Promise<GithubRepos[]> => {
      try {
        const url = "/github-repos";
        const res = await privateApiClient({
          url,
          params: {
            githubAccessToken: githubAccessToken,
          },
        });
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};

export const useLinkGithubRepos = () => {
  return useMutation({
    mutationKey: ["link-github-repo"],
    mutationFn: async ({
      githubAccessToken,
      projectId,
      githubUsername,
      githubRepo,
    }: {
      githubAccessToken: string;
      projectId: string;
      githubUsername: string;
      githubRepo: string;
    }): Promise<{
      message: string;
      githubRepo: string;
      members: string[];
    }> => {
      try {
        const url = "/link-github-repo/";
        const res = await privateApiClient({
          url,
          method: "POST",
          params: {
            githubAccessToken,
            projectId,
          },
          data: { githubUsername, githubRepo },
        });
        console.log(res?.data);
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
