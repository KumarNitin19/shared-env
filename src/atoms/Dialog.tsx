import {
  DialogProps,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
} from "@mui/material";

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
