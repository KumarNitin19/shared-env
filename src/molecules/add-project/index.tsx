import { ChangeEvent, useCallback, useState } from "react";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import InputField from "../../atoms/TextField";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import IconButton from "@mui/material/IconButton";
import { Theme, useTheme } from "@mui/material/styles";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";

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
};

type Props = {
  children: React.ReactNode;
};

function AddProject({ children }: Props) {
  const [isAddProject, setIsAddProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const theme = useTheme();

  // To open the dialog
  const handleOpenProjectDialog = useCallback(() => setIsAddProject(true), []);

  // To close the dialog
  const handleCloseProjectDialog = useCallback(
    () => setIsAddProject(false),
    []
  );

  // To handle input value of project name
  const handleProjectName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setProjectName(e?.target?.value),
    []
  );

  // To submit form value
  const handleAddProject = useCallback(() => {
    if (projectName) {
      setProjectName("");
      handleCloseProjectDialog();
    } else {
      throw new Error("Please add project name");
    }
  }, [projectName]);

  return (
    <>
      <div onClick={handleOpenProjectDialog}>{children}</div>
      <Dialog open={isAddProject} sx={styles.dialog(theme)}>
        <DialogTitle sx={styles.dialogTitle}>
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color={theme.palette.surface100.main}>
              Add Project
            </Typography>
            <Typography
              variant="subtitle2"
              color={theme.palette.surface80.main}>
              Create project to add environment variables.
            </Typography>
          </Box>
          <IconButton
            onClick={handleCloseProjectDialog}
            sx={{ height: "fit-content" }}>
            <Icon
              icon="material-symbols:close-rounded"
              color={theme.palette.surface100.main}
            />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={styles.dialogContent}>
          <Box display="grid" rowGap={2}>
            <Box display="grid" rowGap={1}>
              <Typography
                title="projectName"
                variant="subtitle2"
                color={theme.palette.surface100.main}>
                Project Name
              </Typography>
              <InputField
                id="name"
                placeholder="Enter Project Name"
                value={projectName}
                onChange={handleProjectName}
              />
            </Box>
            <Box display="grid" rowGap={1}>
              <Typography
                title="projectName"
                variant="subtitle2"
                color={theme.palette.surface100.main}>
                Project Description
              </Typography>
              <InputField
                id="name"
                value={projectName}
                onChange={handleProjectName}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={styles.dialogAction}>
          <Button
            variant="outlined"
            type="submit"
            onClick={handleCloseProjectDialog}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" onClick={handleAddProject}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddProject;
