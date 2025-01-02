import { ChangeEvent, useCallback, useState } from "react";
import { Button, Divider, Icon } from "../../atoms";
import { KeyValueProp } from "../../types/commonTypes";
import { generateUID } from "../../utils/commonUtils";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import InputField from "../../atoms/TextField";
import { Typography } from "../../atoms/Typography";
import { IconButton, Theme, useTheme } from "@mui/material";
import { Box } from "../../atoms/Box";

const styles = {
  dialog: (theme: Theme) => ({
    "& .MuiPaper-root": {
      width: 520,
      backgroundColor: theme.palette.sidebarBG.main,
    },
  }),
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    padding: 3,
  },
  dialogContent: {
    paddingBottom: 0,
  },
  dialogAction: {
    padding: 3,
  },
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
  const theme = useTheme();

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
      <Dialog open={isAddEnvironmentGroup} sx={styles.dialog(theme)}>
        <DialogTitle sx={styles.dialogTitle}>
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color={theme.palette.surface100.main}>
              Add Environment Group
            </Typography>
            <Typography
              variant="subtitle2"
              color={theme.palette.surface80.main}>
              Create project to add environment variables.
            </Typography>
          </Box>
          <IconButton
            onClick={handleCloseDialog}
            sx={{ height: "fit-content" }}>
            <Icon
              icon="material-symbols:close-rounded"
              color={theme.palette.surface100.main}
            />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div>
            <div>
              <Typography title="groupName">Group Name</Typography>
              <InputField
                id="name"
                value={groupName}
                onChange={handleGroupName}
              />
            </div>
            <Divider />
            <div>
              <div>
                <div>Variables</div>
                <Divider orientation="vertical" />
                <Button
                  variant="text"
                  startIcon={<Icon icon="fluent:add-16-regular" />}
                  onClick={handleAddEnvVariable}
                  sx={styles.addVariableButton}>
                  Add New Variables
                </Button>
              </div>
              <div>
                <div>
                  <Typography>Key</Typography>
                  <Typography>Value</Typography>
                </div>
                {envVariable?.map((variable) => (
                  <div key={variable?.id}>
                    <InputField
                      id={variable?.id}
                      name="key"
                      value={variable?.key || ""}
                      onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                    />
                    <InputField
                      id={variable?.id}
                      name="value"
                      value={variable?.value || ""}
                      onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                    />
                    <Icon
                      icon="fluent:subtract-circle-20-regular"
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
