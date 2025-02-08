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
import Autocomplete from "../../atoms/Autocomplete";

const styles = {
  dialog: (theme: Theme) => ({
    "& .MuiPaper-root": {
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
  loading: boolean;
  onClose: () => void;
  githubRepos: Array<GithubRepos>;
  onInvite: (githubRepo: string) => void;
  selectedRepo: string;
  setSelectedRepo: (val: string) => void;
  inputValue: string;
  setInputValue: (val: string) => void;
};

const LinkRepositoryDialog = ({
  open = false,
  loading = false,
  selectedRepo = "",
  setSelectedRepo = () => {},
  inputValue = "",
  setInputValue = () => {},
  onClose = () => {},
  githubRepos = [],
  onInvite = () => {},
}: ComponentProps) => {
  const theme = useTheme();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      sx={styles.dialog(theme)}>
      <DialogTitle sx={styles.dialogTitle}>
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
        <IconButton onClick={onClose} sx={{ height: "fit-content" }}>
          <Icon
            icon="material-symbols:close-rounded"
            color={theme.palette.surface100.main}
          />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography
            title="projectName"
            variant="subtitle2"
            color={theme.palette.surface100.main}>
            Repositories
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Autocomplete
              options={githubRepos?.map(
                (repo) => repo?.repo_name + ": " + repo?.github_url
              )}
              value={selectedRepo}
              inputValue={inputValue}
              onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
              onChange={(_, value) => setSelectedRepo(value as string)}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.dialogAction}>
        <Button
          disabled={loading}
          variant="outlined"
          type="submit"
          onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          disabled={!selectedRepo || loading}
          onClick={() => onInvite(selectedRepo?.split(":")[0] || "")}>
          Link
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LinkRepositoryDialog;
