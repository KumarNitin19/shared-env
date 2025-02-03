import React from "react";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";
import { Theme, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
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

type ComponentProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
  title: string;
  isPending: boolean;
};

const ConfirmationDialog: React.FC<ComponentProps> = ({
  open = false,
  onClose = () => {},
  onConfirm = () => {},
  title = "Confirm Dialog",
  children,
  isPending = false,
}) => {
  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose} sx={styles.dialog(theme)}>
      <DialogTitle sx={styles.dialogTitle}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.surface100.main}>
          {title}
        </Typography>
        <IconButton onClick={onClose} sx={{ height: "fit-content" }}>
          <Icon
            icon="material-symbols:close-rounded"
            color={theme.palette.surface100.main}
          />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={styles.dialogContent}>{children}</DialogContent>
      <DialogActions sx={styles.dialogAction}>
        <Button disabled={isPending} variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isPending} variant="contained" onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
