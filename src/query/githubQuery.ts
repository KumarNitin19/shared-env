import { useQuery } from "@tanstack/react-query";
import { privateApiClient } from "../utils/apiUtils";

export const useGithubRepos = () => {
  return useQuery({
    queryKey: ["githubRepos"],
    queryFn: async () => {
      try {
        const url = "/github-repos";
        const res = privateApiClient({
          url,
          params: {
            githubAccessToken: "",
          },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  });
};
