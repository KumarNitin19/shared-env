import { useCallback } from "react";
import { useGithubRepos } from "../../query/githubQuery";
import LinkRepositoryDialog from "./LinkRepositoryDialog";
import useLocalStorage from "../../hooks/useLocalStorage";

type ComponentProps = {
  open: boolean;
  onClose: () => void;
};

const LinkRepository = ({ open, onClose }: ComponentProps) => {
  const { getItem } = useLocalStorage();
  const { data: githubRepos = [] } = useGithubRepos(
    getItem("githubAccessToken") || ""
  );

  const handleInvite = useCallback(() => {}, []);

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
