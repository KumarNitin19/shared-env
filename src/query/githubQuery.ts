import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";
import { GithubRepos } from "../types/project.type";

export const useGithubRepos = (githubAccessToken: string) => {
  return useQuery({
    queryKey: ["githubRepos"],
    queryFn: async () => {
      try {
        const url = "/github-repos";
        const res = await privateApiClient({
          url,
          params: {
            githubAccessToken: githubAccessToken,
          },
        });
        return res.data as Promise<GithubRepos[]>;
      } catch (error) {
        return Promise.reject<unknown>;
      }
    },
  });
};
