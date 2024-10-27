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

export function AddProject() {
  const [isAddProject, setIsAddProject] = useState<boolean>(false);

  const handleOpenProjectDialog = useCallback(() => setIsAddProject(true), []);

  const handleCloseProjectDialog = useCallback(
    () => setIsAddProject(false),
    []
  );

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
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value="Pedro Duarte"
                className="col-span-3"
                onChange={() => {}}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value="@peduarte"
                className="col-span-3"
                onChange={() => {}}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleCloseProjectDialog}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
