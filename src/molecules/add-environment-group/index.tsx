import { ChangeEvent, useCallback, useState } from "react";
import { Button, Divider, Icon, Label } from "../../atoms";
import { KeyValueProp } from "../../types/commonTypes";
import { generateUID } from "../../utils/commonUtils";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import InputField from "../../atoms/TextField";

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

  // To open the dialog
  const handleOpenDialog = useCallback(() => {
    setIsAddEnvironmentGroup(true);
  }, []);

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
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setGroupName(e?.target?.value),
    []
  );

  // To manage the variable key value input
  const handleChangeEnvVariable = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, itemId: string) =>
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
    <>
      <div onClick={handleOpenDialog}>{children}</div>
      <Dialog open={isAddEnvironmentGroup}>
        <DialogTitle>Add Environment Group</DialogTitle>
        <DialogContent className="min-w-[50%]">
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="groupName" className="text-start">
                Group Name
              </Label>
              <InputField
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
                    <InputField
                      id={variable?.id}
                      name="key"
                      value={variable?.key || ""}
                      className="col-span-3"
                      onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                    />
                    <InputField
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
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleAddEnvironmentGroup}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddEnvironmentGroup;
