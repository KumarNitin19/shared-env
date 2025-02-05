import { useQuery } from "@tanstack/react-query";
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
