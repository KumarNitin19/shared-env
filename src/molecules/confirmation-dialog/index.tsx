import React from "react";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";
import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";

type ComponentProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
  title: string;
};

const ConfirmationDialog: React.FC<ComponentProps> = ({
  open = false,
  onClose = () => {},
  onConfirm = () => {},
  title = "Confirm Dialog",
  children,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography>{title}</Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
