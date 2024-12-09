import { ChangeEvent, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "../../atoms";

type Props = {
  children: React.ReactNode;
};

function AddProject({ children }: Props) {
  const [isAddProject, setIsAddProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

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
    <Dialog open={isAddProject} onOpenChange={setIsAddProject}>
      <DialogTrigger>{children}</DialogTrigger>
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
          <DialogClose asChild>
            <Button
              variant="outlined"
              type="submit"
              onClick={handleCloseProjectDialog}>
              Cancel
            </Button>
          </DialogClose>
          <Button variant="contained" type="submit" onClick={handleAddProject}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddProject;
