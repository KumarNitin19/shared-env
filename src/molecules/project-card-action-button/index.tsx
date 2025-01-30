import { useCallback, useState } from "react";
import ConfirmationDialog from "../confirmation-dialog";
import ProjectCardActionMenu from "./project-card-action-menu";
import { Typography } from "../../atoms/Typography";
import AddProject from "../add-project";
import { AddProjectType, ProjectData } from "../../types/project.type";
import {
  useDeleteProject,
  useEditProject,
  useProjects,
} from "../../query/projectQuery";
import useSnackbar from "../../hooks/useSnackbar";
import Loader from "../loader";

type ComponentProps = {
  projectData: ProjectData;
};

const ProjectCardActionButton = ({ projectData }: ComponentProps) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const { refetch: refetchProjects } = useProjects();
  const { mutateAsync: editProject } = useEditProject();
  const { mutateAsync: deleteProject } = useDeleteProject();
  const { addAlert } = useSnackbar();

  const handleConfirmDelete = useCallback(() => setIsDelete(true), []);

  const handleCloseConfirmDelete = useCallback(() => setIsDelete(false), []);

  const handleEditDialog = useCallback(() => setIsEdit(true), []);

  const handleCloseEditDialog = useCallback(() => setIsEdit(false), []);

  const onDelete = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await deleteProject(projectData?.id);
      console.log(res);
      refetchProjects();
      addAlert({
        message: `${projectData?.projectName} deleted successfully!!`,
        variant: "filled",
        type: "success",
      });
    } catch (error) {
      console.log(error);
      addAlert({
        message: "Something went wrong, please try again!",
        variant: "filled",
        type: "error",
      });
    } finally {
      handleCloseConfirmDelete();
      setIsLoading(false);
    }
  }, [
    projectData,
    deleteProject,
    refetchProjects,
    addAlert,
    handleCloseConfirmDelete,
    setIsLoading,
  ]);

  const onEdit = useCallback(
    async (body: AddProjectType) => {
      setIsLoading(true);
      try {
        await editProject({
          projectId: projectData?.id,
          projectDetail: body,
        });
        refetchProjects();
        addAlert({
          message: "Project updated successfully!!",
          variant: "filled",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        addAlert({
          message: "Something went wrong, please try again!",
          variant: "filled",
          type: "error",
        });
      } finally {
        handleCloseEditDialog();
        setIsLoading(false);
      }
    },
    [
      projectData,
      editProject,
      refetchProjects,
      addAlert,
      handleCloseEditDialog,
      setIsLoading,
    ]
  );

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
      <Loader loader={loading} fullPage />
    </>
  );
};

export default ProjectCardActionButton;
