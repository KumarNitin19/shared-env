import { useCallback, useState } from "react";
import ConfirmationDialog from "../confirmation-dialog";
import ProjectCardActionMenu from "./project-card-action-menu";
import { Typography } from "../../atoms/Typography";
import AddProject from "../add-project";
import { ProjectData } from "../../types/project.type";

type ComponentProps = {
  projectData: ProjectData;
};

const ProjectCardActionButton = ({ projectData }: ComponentProps) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleConfirmDelete = useCallback(() => setIsDelete(true), []);

  const handleCloseConfirmDelete = useCallback(() => setIsDelete(false), []);

  const handleEditDialog = useCallback(() => setIsEdit(true), []);

  const handleCloseEditDialog = useCallback(() => setIsEdit(false), []);

  const onDelete = useCallback(() => {}, []);

  const onEdit = useCallback(() => {}, []);

  return (
    <>
      <ProjectCardActionMenu
        handleDelete={handleConfirmDelete}
        handleEdit={handleEditDialog}
      />
      <ConfirmationDialog
        open={isDelete}
        title="Confirm Project Delete"
        onClose={handleCloseConfirmDelete}
        onConfirm={onDelete}>
        <Typography>Are you sure you want to delete the project?</Typography>
      </ConfirmationDialog>
      <AddProject
        open={isEdit}
        onClose={handleCloseEditDialog}
        handleSave={onEdit}
        projectData={projectData}
        isEdit={true}
      />
    </>
  );
};

export default ProjectCardActionButton;
