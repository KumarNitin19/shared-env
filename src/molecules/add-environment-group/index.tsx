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
import { KeyValueProp } from "../../types/commonTypes";
import { generateUID } from "../../utils/commonUtils";

type Props = {
  children: React.ReactNode;
};

function AddEnvironmentGroup({ children }: Props) {
  const [isAddEnvironmentGroup, setIsAddEnvironmentGroup] =
    useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>("");
  const [envVariable, setEnvVariable] = useState<KeyValueProp<string>[]>([
    {
      id: generateUID(),
      key: "",
      value: "",
    },
  ]);

  const handleOpenDialog = useCallback(
    () => setIsAddEnvironmentGroup(true),
    []
  );

  const handleCloseDialog = useCallback(
    () => setIsAddEnvironmentGroup(false),
    []
  );

  const handleGroupName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setGroupName(e?.target?.value),
    []
  );

  const handleChangeEnvVariable = useCallback(
    (e: ChangeEvent<HTMLInputElement>, itemId: string) =>
      setEnvVariable((prev) => {
        return prev.map((variable) => {
          if (variable.id === itemId) {
            variable[e.target.name] = e.target.value;
          }
          return variable;
        });
      }),
    []
  );

  const handleAddEnvVariable = useCallback(() => {
    setEnvVariable([
      ...envVariable,
      {
        id: generateUID(),
        key: "",
        value: "",
      },
    ]);
  }, [envVariable]);

  const handleAddEnvironmentGroup = useCallback(() => {
    if (groupName) {
      setGroupName("");
      handleCloseDialog();
      setEnvVariable([
        {
          id: generateUID(),
          key: "",
          value: "",
        },
      ]);
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
                onChange={handleGroupName}
              />
            </div>
            <Divider />
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="text-sm font-semibold">Variables</div>
                <Divider orientation="vertical" className="h-3 my-auto" />
                <Button
                  variant="link"
                  className="p-0 flex gap-2 h-[22px]"
                  onClick={handleAddEnvVariable}>
                  <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
                  Add New Variables
                </Button>
              </div>
              <div className="grid gap-2">
                <div className="flex gap-4 items-center">
                  <Label className="text-start w-full">Key</Label>
                  <Label className="text-start w-full mr-9">Value</Label>
                </div>
                {envVariable?.map((variable) => (
                  <div key={variable?.id} className="flex gap-4 items-center">
                    <Input
                      id={variable?.id}
                      name="key"
                      value={variable?.key || ""}
                      className="col-span-3"
                      onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                    />
                    <Input
                      id={variable?.id}
                      name="value"
                      value={variable?.value || ""}
                      className="col-span-3"
                      onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                    />
                    <Icon
                      icon="fluent:subtract-circle-20-regular"
                      className="w-5 h-5 cursor-pointer text-red-700 transition-all flex-shrink-0 mt-7"
                    />
                  </div>
                ))}
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
