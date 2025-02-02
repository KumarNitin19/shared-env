import { lazy, useCallback, useState } from "react";
import { AddProjectType } from "../../types/project.type";
import { useAddProject, useProjects } from "../../query/projectQuery";
import useSnackbar from "../../hooks/useSnackbar";
import Loader from "../../molecules/loader";

const DashboardPage = lazy(() => import("../../pages/dashboard"));
const AddProject = lazy(() => import("../../molecules/add-project"));

const DashboardContainer = () => {
  const [isAddProject, setIsAddProject] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateAsync: addProject } = useAddProject();
  const { refetch } = useProjects();
  const { addAlert } = useSnackbar();

  const handleOpenAddProject = useCallback(() => setIsAddProject(true), []);

  const handleCloseAddProject = useCallback(() => setIsAddProject(false), []);

  const onAddProject = useCallback(
    async (body: AddProjectType) => {
      setIsLoading(true);
      try {
        const res = await addProject(body);

        if (res?.projectId) {
          refetch();
          addAlert({
            message: "Project created successfully!!",
            variant: "filled",
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
        addAlert({
          message: "Something went wrong, please try again!",
          variant: "filled",
          type: "error",
        });
      } finally {
        setIsLoading(false);
        handleCloseAddProject();
      }
    },
    [addAlert, refetch, handleCloseAddProject]
  );

  return (
    <>
      <DashboardPage handleOpenAddProject={handleOpenAddProject} />
      <AddProject
        open={isAddProject}
        onClose={handleCloseAddProject}
        handleSave={onAddProject}
      />
      <Loader loader={isLoading} fullPage />
    </>
  );
};

export default DashboardContainer;
