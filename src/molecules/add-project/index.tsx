import { ChangeEvent, useCallback, useState } from "react";
import { Button, Input, Label } from "../../atoms";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

function AddProject({ children }: Props) {
  const [isAddProject, setIsAddProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  // To open the dialog
  const handleOpenProjectDialog = useCallback(() => setIsAddProject(true), []);

  // To close the dialog
  const handleCloseProjectDialog = useCallback(
    () => setIsAddProject(false),
    []
  );

  // To handle input value of project name
  const handleProjectName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setProjectName(e?.target?.value),
    []
  );

  // To submit form value
  const handleAddProject = useCallback(() => {
    if (projectName) {
      setProjectName("");
      handleCloseProjectDialog();
    } else {
      throw new Error("Please add project name");
    }
  }, [projectName]);

  return (
    <>
      <div onClick={handleOpenProjectDialog}>{children}</div>
      <Dialog open={isAddProject}>
        <Box>
          <DialogTitle>Add Project</DialogTitle>
          Create project to add environment variables.
        </Box>
        <DialogContent className="sm:max-w-[425px]">
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="projectName" className="text-start">
                Project Name
              </Label>
              <Input
                id="name"
                value={projectName}
                className="col-span-3"
                onChange={handleProjectName}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            type="submit"
            onClick={handleCloseProjectDialog}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" onClick={handleAddProject}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddProject;
