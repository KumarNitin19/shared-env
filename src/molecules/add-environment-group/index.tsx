import { ChangeEvent, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Divider,
  Icon,
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
        <DialogContent className="min-w-[50%]">
          <DialogHeader>
            <DialogTitle>Add Environment Group</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="groupName" className="text-start">
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
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="text-sm font-semibold">Variables</div>
                <Divider orientation="vertical" className="h-3 my-auto" />
                <Button variant="link" className="p-0 flex gap-2 h-[22px]">
                  <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
                  Add New Variables
                </Button>
              </div>
              <div className="flex gap-4 items-center">
                <div className="grid items-center gap-4 w-full">
                  <Label htmlFor="key" className="text-start">
                    Key
                  </Label>
                  <Input
                    id="name"
                    value={groupName}
                    className="col-span-3"
                    onChange={handleProjectName}
                  />
                </div>
                <div className="grid items-center gap-4 w-full">
                  <Label htmlFor="value" className="text-start">
                    Value
                  </Label>
                  <Input
                    id="name"
                    value={groupName}
                    className="col-span-3"
                    onChange={handleProjectName}
                  />
                </div>
                <Icon
                  icon="fluent:subtract-circle-20-regular"
                  className="w-5 h-5 cursor-pointer text-red-700 transition-all flex-shrink-0 mt-7"
                />
              </div>
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
