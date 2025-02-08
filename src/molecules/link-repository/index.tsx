import { useCallback } from "react";
import { useGithubRepos, useLinkGithubRepos } from "../../query/githubQuery";
import LinkRepositoryDialog from "./LinkRepositoryDialog";
import useLocalStorage from "../../hooks/useLocalStorage";

type ComponentProps = {
  projectId: string;
  open: boolean;
  onClose: () => void;
};

const LinkRepository = ({ projectId, open, onClose }: ComponentProps) => {
  const { getItem } = useLocalStorage();
  const githubAccessToken = getItem("githubAccessToken");
  const { data: githubRepos = [] } = useGithubRepos(githubAccessToken || "");
  const { mutateAsync: LinkGithubWithProject } = useLinkGithubRepos();

  console.log(projectId);

  const handleInvite = useCallback(
    async (githubRepo: string) => {
      const githubUsername = githubRepos
        ?.find((repo) => repo?.repo_name === githubRepo)
        ?.full_name.split("/")[0];
      try {
        const data = await LinkGithubWithProject({
          projectId,
          githubAccessToken,
          githubUsername: githubUsername || "",
          githubRepo,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    [projectId, githubAccessToken]
  );

  return (
    <LinkRepositoryDialog
      open={open}
      onClose={onClose}
      githubRepos={githubRepos}
      onInvite={handleInvite}
    />
  );
};

export default LinkRepository;
