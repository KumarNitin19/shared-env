import { IconButton, Theme, useTheme } from "@mui/material";
import { Box } from "../../atoms/Box";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import { Typography } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icon";
import { Button } from "../../atoms/Button";
import { GithubRepos } from "../../types/project.type";

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
  githubRepos: Array<GithubRepos>;
  onInvite: () => void;
};

const LinkRepository = ({
  open = false,
  onClose = () => {},
  githubRepos = [],
  onInvite = () => {},
}: ComponentProps) => {
  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            color={theme.palette.surface100.main}>
            Link Repository
          </Typography>
          <Typography variant="subtitle2" color={theme.palette.surface80.main}>
            Link repository to project
          </Typography>
        </Box>
        <IconButton onClick={() => {}} sx={{ height: "fit-content" }}>
          <Icon
            icon="material-symbols:close-rounded"
            color={theme.palette.surface100.main}
          />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <Box display="grid" rowGap={2}>
          <Typography
            title="projectName"
            variant="subtitle2"
            color={theme.palette.surface100.main}>
            Project Name
          </Typography>
          <Box display="grid" rowGap={1}></Box>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.dialogAction}>
        <Button variant="outlined" type="submit" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" type="submit" onClick={onInvite}>
          Link
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LinkRepository;
