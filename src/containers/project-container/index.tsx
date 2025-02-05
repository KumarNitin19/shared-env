import ProjectPage from "../../pages/project";
import LinkRepository from "../../molecules/link-repository";
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
      <LinkRepository
        open={isOpenLinkRrepositoryDialog}
        onClose={handleCloseLinkRepositoryDialog}
      />
    </>
  );
};

export default ProjectContainer;
