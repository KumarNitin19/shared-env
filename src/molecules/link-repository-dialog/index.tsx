import { useCallback } from "react";
import useUser from "../../hooks/useUser";
import { useGithubRepos } from "../../query/githubQuery";
import LinkRepository from "./LinkRepository";

type ComponentProps = {
  open: boolean;
  onClose: () => void;
};

const LinkRepositoryDialog = ({ open, onClose }: ComponentProps) => {
  const userInfo = useUser();
  const { data: githubRepos = [] } = useGithubRepos(
    userInfo?.githubAccessToken || ""
  );

  const handleInvite = useCallback(() => {}, []);

  return (
    <LinkRepository
      open={open}
      onClose={onClose}
      githubRepos={githubRepos}
      onInvite={handleInvite}
    />
  );
};

export default LinkRepositoryDialog;
