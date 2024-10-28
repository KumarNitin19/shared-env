import { useCallback, useState } from "react";
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

export function AddEnvironmentVariable() {
  const [isAddEnvironmenVariable, setIsAddEnvironmenVariable] =
    useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const handleOpenEnviornmentDialog = useCallback(
    () => setIsAddEnvironmenVariable(true),
    []
  );

  const handleCloseEnvironmentProjectDialog = useCallback(
    () => setIsAddEnvironmenVariable(false),
    []
  );

  return (
    <>
      <Button
        className="mt-6 px-8 flex gap-2"
        onClick={handleOpenEnviornmentDialog}>
        <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
        Create Project
      </Button>
      <Dialog open={isAddEnvironmenVariable}>
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
              <Input id="name" value={projectName} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="secondary"
              type="submit"
              onClick={handleCloseEnvironmentProjectDialog}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
