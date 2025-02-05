import { useParams } from "react-router-dom";
import Loader from "../../molecules/loader";
import ProjectPage from "../../pages/project";
import { useProjects } from "../../query/projectQuery";
import LinkRepositoryDialog from "../../molecules/link-repository-dialog";
import { useCallback, useState } from "react";

const ProjectContainer = () => {
  const [isOpenLinkRrepositoryDialog, setIsOpenLinkRrepositoryDialog] =
    useState<boolean>(false);

  const handleOpenLinkRepositoryDialog = useCallback(
    () => setIsOpenLinkRrepositoryDialog(true),
    []
  );
  const handleCloseLinkRepositoryDialog = useCallback(
    () => setIsOpenLinkRrepositoryDialog(false),
    []
  );

  return (
    <>
      <ProjectPage onLinkRepository={handleOpenLinkRepositoryDialog} />
      <LinkRepositoryDialog
        open={isOpenLinkRrepositoryDialog}
        onClose={handleCloseLinkRepositoryDialog}
      />
    </>
  );
};

export default ProjectContainer;
