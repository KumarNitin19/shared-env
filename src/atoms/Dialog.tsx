import { DialogProps, default as MuiDialog } from "@mui/material/Dialog";
import {
  default as MuiDialogActions,
  DialogActionsProps,
} from "@mui/material/DialogActions";
import {
  default as MuiDialogTitle,
  DialogTitleProps,
} from "@mui/material/DialogTitle";

import {
  default as MuiDialogContent,
  DialogContentProps,
} from "@mui/material/DialogContent";

export default function Dialog(props: DialogProps) {
  return <MuiDialog {...props} />;
}

const DialogTitle = (props: DialogTitleProps) => {
  return <MuiDialogTitle {...props} />;
};

const DialogContent = (props: DialogContentProps) => {
  return <MuiDialogContent {...props} />;
};

const DialogActions = (props: DialogActionsProps) => {
  return <MuiDialogActions {...props} />;
};

export { DialogTitle, DialogContent, DialogActions };
