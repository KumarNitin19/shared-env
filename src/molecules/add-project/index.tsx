import { ChangeEvent, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Icon,
  Input,
  Label,
} from "../../atoms";

export function AddProject() {
  const [isAddProject, setIsAddProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const handleOpenProjectDialog = useCallback(() => setIsAddProject(true), []);

  const handleCloseProjectDialog = useCallback(
    () => setIsAddProject(false),
    []
  );

  const handleProjectName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setProjectName(e?.target?.value),
    []
  );

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
      <Button
        className="mt-6 px-8 flex gap-2"
        onClick={handleOpenProjectDialog}>
        <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
        Create Project
      </Button>
      <Dialog open={isAddProject}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
            <DialogDescription>
              Create project to add environment variables.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <Button
              variant="secondary"
              type="submit"
              onClick={handleCloseProjectDialog}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleAddProject}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
