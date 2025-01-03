import { ChangeEvent, useCallback, useState } from "react";
import { Button, Icon } from "../../atoms";
import { KeyValueProp } from "../../types/commonTypes";
import { generateUID } from "../../utils/commonUtils";

import InputField from "../../atoms/TextField";
import { Typography } from "../../atoms/Typography";
import { Divider, IconButton, Theme, useTheme } from "@mui/material";
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
  iconButton: {
    padding: 0,
  },
  inputField: {
    flex: 1,
    "& .MuiInputBase-input": {
      fontSize: 14,
    },
  },
};

function AddEnvironmentGroup() {
  const [groupName, setGroupName] = useState<string>("");
  const [envVariable, setEnvVariable] = useState<KeyValueProp<string>[]>([
    {
      id: generateUID(),
      key: "",
      value: "",
    },
  ]);
  const theme = useTheme();

  // To close the dialog and reset the state
  const onCancel = useCallback(() => {
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
      onCancel();
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
    <Box>
      <Box>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.surface100.main}>
          Add Environment Group
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.surface80.main}>
          Create project to add environment variables.
        </Typography>
      </Box>

      <Box display="grid" rowGap={2}>
        <Box display="grid" rowGap={1}>
          <Typography
            title="projectName"
            variant="subtitle2"
            color={theme.palette.surface100.main}>
            Group Name
          </Typography>
          <InputField
            id="groupName"
            placeholder="Enter Group Name"
            value={groupName}
            onChange={handleGroupName}
            sx={styles.inputField}
          />
        </Box>
        <Box display="grid" rowGap={1}>
          <Box display="flex" gap={2} alignItems="center">
            <Typography
              title="projectName"
              variant="subtitle2"
              color={theme.palette.surface100.main}>
              Variables
            </Typography>
            <Divider orientation="vertical" sx={{ height: 12 }} />
            <Button variant="text" onClick={handleAddEnvVariable}>
              Add new Variable
            </Button>
          </Box>
          {envVariable?.map((variable, index) => (
            <Box key={variable?.id} display="flex" gap={1}>
              <InputField
                id={variable?.id}
                name="key"
                placeholder="Enter Variable Key"
                value={variable?.key || ""}
                onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                sx={styles.inputField}
              />
              <InputField
                id={variable?.id}
                name="value"
                placeholder="Enter Variable Value"
                value={variable?.value || ""}
                onChange={(e) => handleChangeEnvVariable(e, variable?.id)}
                sx={styles.inputField}
              />
              <IconButton sx={styles.iconButton}>
                {envVariable?.length > 1 ? (
                  <Icon
                    icon="fluent:subtract-circle-20-regular"
                    color="red"
                    fontSize={20}
                    onClick={() => handleRemoveEnvVariable(variable?.id)}
                  />
                ) : null}
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>

      <Box display="flex" gap={1.5} justifyContent="end">
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleAddEnvironmentGroup}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default AddEnvironmentGroup;
