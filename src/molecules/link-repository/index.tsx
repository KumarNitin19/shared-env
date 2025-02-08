import { useCallback, useState } from "react";
import { useGithubRepos, useLinkGithubRepos } from "../../query/githubQuery";
import LinkRepositoryDialog from "./LinkRepositoryDialog";
import useLocalStorage from "../../hooks/useLocalStorage";
import useSnackbar from "../../hooks/useSnackbar";

type ComponentProps = {
  projectId: string;
  open: boolean;
  onClose: () => void;
};

const LinkRepository = ({ projectId, open, onClose }: ComponentProps) => {
  const [selectedRepo, setSelectedRepo] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const { getItem } = useLocalStorage();
  const githubAccessToken = getItem("githubAccessToken");
  const { data: githubRepos = [] } = useGithubRepos(githubAccessToken || "");
  const { mutateAsync: LinkGithubWithProject } = useLinkGithubRepos();
  const { addAlert } = useSnackbar();

  const handleCloseDialog = useCallback(() => {
    onClose();
    setSelectedRepo("");
    setInputValue("");
  }, []);

  const handleInvite = useCallback(
    async (githubRepo: string) => {
      const githubUsername = githubRepos
        ?.find((repo) => repo?.repo_name === githubRepo)
        ?.full_name.split("/")[0];
      try {
        await LinkGithubWithProject({
          projectId,
          githubAccessToken,
          githubUsername: githubUsername || "",
          githubRepo,
        });

        addAlert({
          message: "Github repo linked successfully!!",
          type: "success",
          variant: "filled",
        });
      } catch (error) {
        console.log(error);
        addAlert({
          message: "Something went wrong, please try again!!",
          type: "error",
          variant: "filled",
        });
      } finally {
        handleCloseDialog();
      }
    },
    [projectId, githubAccessToken]
  );

  return (
    <LinkRepositoryDialog
      open={open}
      selectedRepo={selectedRepo}
      setSelectedRepo={setSelectedRepo}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onClose={handleCloseDialog}
      githubRepos={githubRepos}
      onInvite={handleInvite}
    />
  );
};

export default LinkRepository;
