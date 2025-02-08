import ProjectPage from "../../pages/project";
import LinkRepository from "../../molecules/link-repository";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectContainer = () => {
  const [isOpenLinkRrepositoryDialog, setIsOpenLinkRrepositoryDialog] =
    useState<boolean>(false);
  const { projectId = "" } = useParams<{ projectId: string }>();

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
      <ProjectPage
        projectId={projectId}
        onLinkRepository={handleOpenLinkRepositoryDialog}
      />
      <LinkRepository
        projectId={projectId}
        open={isOpenLinkRrepositoryDialog}
        onClose={handleCloseLinkRepositoryDialog}
      />
    </>
  );
};

export default ProjectContainer;
