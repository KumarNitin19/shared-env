import { ChangeEvent, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Divider,
  Icon,
  Input,
  Label,
} from "../../atoms";
import { KeyValueProp } from "../../types/commonTypes";
import { generateUID } from "../../utils/commonUtils";

const styles = {
  addVariableButton: { height: "fit-content" },
};

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

  // To close the dialog and reset the state
  const handleCloseDialog = useCallback(() => {
    setIsAddEnvironmentGroup(false);
    setEnvVariable([
      {
        id: generateUID(),
        key: "",
        value: "",
      },
    ]);
  }, []);

  // To add group name
  const handleGroupName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setGroupName(e?.target?.value),
    []
  );

  // To manage the variable key value input
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

  // To add key value pair
  const handleAddEnvVariable = useCallback(() => {
    setEnvVariable((prev) => [
      ...prev,
      {
        id: generateUID(),
        key: "",
        value: "",
      },
    ]);
  }, []);

  // To remove key value pair
  const handleRemoveEnvVariable = useCallback((id: string) => {
    setEnvVariable((prev) => prev.filter((item) => item?.id !== id));
  }, []);

  // To submit the values of form
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
    <Dialog
      open={isAddEnvironmentGroup}
      onOpenChange={setIsAddEnvironmentGroup}>
      <DialogTrigger>{children}</DialogTrigger>
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
                variant="text"
                startIcon={
                  <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
                }
                onClick={handleAddEnvVariable}
                sx={styles.addVariableButton}>
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
                    className="w-5 h-5 cursor-pointer text-red-700 transition-all flex-shrink-0"
                    onClick={() => handleRemoveEnvVariable(variable?.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outlined" onClick={handleCloseDialog}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="contained"
            onClick={handleAddEnvironmentGroup}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddEnvironmentGroup;
