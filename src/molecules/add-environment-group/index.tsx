import { ChangeEvent, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Divider,
  Input,
  Label,
} from "../../atoms";

type Props = {
  children: React.ReactNode;
};

function AddEnvironmentGroup({ children }: Props) {
  const [isAddEnvironmentGroup, setIsAddEnvironmentGroup] =
    useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>("");

  const handleOpenDialog = useCallback(
    () => setIsAddEnvironmentGroup(true),
    []
  );

  const handleCloseDialog = useCallback(
    () => setIsAddEnvironmentGroup(false),
    []
  );

  const handleProjectName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setGroupName(e?.target?.value),
    []
  );

  const handleAddEnvironmentGroup = useCallback(() => {
    if (groupName) {
      setGroupName("");
      handleCloseDialog();
    } else {
      throw new Error("Please add environment group name");
    }
  }, [groupName]);

  return (
    <>
      <div onClick={handleOpenDialog}>{children}</div>
      <Dialog open={isAddEnvironmentGroup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Environment Group</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="projectName" className="text-start">
                Group Name
              </Label>
              <Input
                id="name"
                value={groupName}
                className="col-span-3"
                onChange={handleProjectName}
              />
            </div>
            <Divider />
            <div className="grid items-center gap-4">
              <Label htmlFor="projectName" className="text-start">
                Group Name
              </Label>
              <Input
                id="name"
                value={groupName}
                className="col-span-3"
                onChange={handleProjectName}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="secondary"
              type="submit"
              onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleAddEnvironmentGroup}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddEnvironmentGroup;
