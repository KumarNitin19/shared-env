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
import { AddProjectType } from "../../types/project.type";

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

type ComponentProps = {
  open: boolean;
  onClose: () => void;
  handleAddProject: (body: AddProjectType) => void;
};

function AddProject({
  open = false,
  onClose = () => {},
  handleAddProject,
}: ComponentProps) {
  const [projectDetails, setProjectDetails] = useState<AddProjectType>({
    projectName: "",
    projectDescription: "",
  });
  const theme = useTheme();

  // To handle input value of project name
  const handleForm = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setProjectDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      })),
    []
  );

  return (
    <Dialog open={open} sx={styles.dialog(theme)}>
      <DialogTitle sx={styles.dialogTitle}>
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            color={theme.palette.surface100.main}>
            Add Project
          </Typography>
          <Typography variant="subtitle2" color={theme.palette.surface80.main}>
            Create project to add environment variables.
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ height: "fit-content" }}>
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
              name="projectName"
              placeholder="Enter Project Name"
              value={projectDetails?.projectName}
              onChange={handleForm}
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
              name="projectDescription"
              placeholder="Enter Project Description"
              value={projectDetails?.projectDescription}
              onChange={handleForm}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.dialogAction}>
        <Button variant="outlined" type="submit" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={() => handleAddProject(projectDetails)}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddProject;
