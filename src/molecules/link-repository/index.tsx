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

  const handleInvite = useCallback(
    async (githubRepo: string) => {
      try {
        const data = await LinkGithubWithProject({
          projectId,
          githubAccessToken,
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
