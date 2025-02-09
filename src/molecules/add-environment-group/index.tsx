import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { generateUID } from "../../utils/commonUtils";
import InputField from "../../atoms/TextField";
import { Typography } from "../../atoms/Typography";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";
import { Divider } from "../../atoms/Divider";
import { Icon } from "../../atoms/Icon";
import {
  useAddENVGroup,
  useEnvGroups,
  useUpdateENVGroup,
} from "../../query/envGroupQuery";
import useSnackbar from "../../hooks/useSnackbar";

const styles = {
  addVariableButton: { height: "fit-content", fontSize: 14 },
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

type Props = {
  isEdit?: boolean;
  onCancel: () => void;
  projectId: string;
  variables?: Array<{
    [key: string]: string;
  }>;
  groupName?: string;
  groupId?: string;
};

function AddEnvironmentGroup({
  groupName = "",
  groupId = "",
  isEdit = false,
  onCancel,
  projectId = "",
  variables = [],
}: Props) {
  const [variableGroupName, setVariableGroupName] = useState<string>(
    groupName || ""
  );
  const [envVariable, setEnvVariable] = useState<
    Array<{
      [key: "id" | "key" | "value" | string]: string;
    }>
  >([
    {
      id: generateUID(),
      key: "",
      value: "",
    },
  ]);
  const theme = useTheme();
  const { refetch: refetchGroups } = useEnvGroups(projectId);
  const { mutateAsync: addENVGroup, isPending: isAddingGroup } =
    useAddENVGroup();
  const { mutateAsync: updateENVGroup, isPending: isUpdatingGroup } =
    useUpdateENVGroup();
  const { addAlert } = useSnackbar();

  useEffect(() => {
    if (variables?.length) {
      setEnvVariable(
        variables?.map((el) => {
          const [key, value] = Object.entries(el)[0];
          return {
            id: generateUID(),
            key,
            value,
          };
        })
      );
    }
  }, [variables]);

  // To close the dialog and reset the state
  const onDiscard = useCallback(() => {
    onCancel();
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
      setVariableGroupName(e?.target?.value),
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
  const handleAddEnvironmentGroup = useCallback(async () => {
    try {
      if (variableGroupName) {
        const envData = {
          projectId,
          groupName: variableGroupName,
          variables:
            envVariable?.map((item) => ({ [item.key]: item.value })) || [],
        };
        let res;
        if (isEdit) {
          res = await updateENVGroup({ groupId: groupId, formData: envData });
        } else {
          res = await addENVGroup(envData);
        }
        refetchGroups();
        addAlert({
          message: `${res?.group?.groupName} ${
            isEdit ? "updated" : "added"
          } successfully!!`,
          type: "success",
          variant: "filled",
        });
      } else {
        addAlert({
          message: "Please add group name!!",
          type: "error",
          variant: "filled",
        });
        return;
      }
    } catch (error) {
      console.log(error);
      addAlert({
        message: "Something went wrong, please try again!!",
        type: "error",
        variant: "filled",
      });
    } finally {
      setVariableGroupName("");
      setEnvVariable([
        {
          id: generateUID(),
          key: "",
          value: "",
        },
      ]);
      onCancel();
    }
  }, [
    variableGroupName,
    envVariable,
    onCancel,
    addAlert,
    setEnvVariable,
    setVariableGroupName,
  ]);

  return (
    <Box display="grid" rowGap={3} mt={3}>
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
          value={variableGroupName}
          onChange={handleGroupName}
          sx={styles.inputField}
        />
      </Box>
      <Box display="grid" rowGap={4}>
        <Box display="flex" gap={2} alignItems="center">
          <Typography
            title="projectName"
            variant="subtitle2"
            color={theme.palette.surface100.main}>
            Variables
          </Typography>
          <Divider orientation="vertical" sx={{ height: 12 }} />
          <Button
            variant="text"
            startIcon={
              <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
            }
            onClick={handleAddEnvVariable}
            sx={styles.addVariableButton}>
            Add New Variable
          </Button>
        </Box>
        {variables?.length ? (
          <Box display="grid" rowGap={1}>
            <Box display="flex" gap={1}>
              <Typography
                variant="body2"
                flex={1}
                color={theme.palette.surface100.main}>
                Key
              </Typography>
              <Typography
                variant="body2"
                flex={1}
                color={theme.palette.surface100.main}>
                Value
              </Typography>
              <Box width={20}></Box>
            </Box>
            {envVariable?.map((variable) => (
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
                <IconButton
                  onClick={() => handleRemoveEnvVariable(variable?.id)}
                  sx={styles.iconButton}>
                  {envVariable?.length > 1 ? (
                    <Icon
                      icon="fluent:subtract-circle-20-regular"
                      color="red"
                      fontSize={20}
                    />
                  ) : null}
                </IconButton>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography
            variant="body2"
            color={theme.palette.surface80.main}
            sx={{ margin: "auto" }}>
            Start adding variables
          </Typography>
        )}
      </Box>

      <Box display="flex" gap={1.5} justifyContent="end">
        <Button
          disabled={isAddingGroup || isUpdatingGroup}
          variant="outlined"
          onClick={onDiscard}>
          Cancel
        </Button>
        <Button
          disabled={isAddingGroup || isUpdatingGroup}
          type="submit"
          variant="contained"
          onClick={handleAddEnvironmentGroup}>
          {isEdit ? "Save" : "Add"}
        </Button>
      </Box>
    </Box>
  );
}

export default AddEnvironmentGroup;
