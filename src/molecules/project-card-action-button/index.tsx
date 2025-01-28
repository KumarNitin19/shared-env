import { useCallback, useState } from "react";
import ConfirmationDialog from "../confirmation-dialog";
import ProjectCardActionMenu from "./project-card-action-menu";
import { Typography } from "../../atoms/Typography";

type ComponentProps = {
  projectId: string;
};

const ProjectCardActionButton = ({ projectId = "" }: ComponentProps) => {
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
    </>
  );
};

export default ProjectCardActionButton;
