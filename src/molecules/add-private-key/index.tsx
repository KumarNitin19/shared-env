import { IconButton, Theme, useTheme } from "@mui/material";
import Dialog, { DialogContent, DialogTitle } from "../../atoms/Dialog";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import { Icon } from "../../atoms";
import CopyText from "../copy-text";

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
  open: boolean;
  onClose: () => void;
};

const AddPrivateKey = ({ open = false, onClose = () => {} }: Props) => {
  const theme = useTheme();
  return (
    <Dialog open={open} sx={styles.dialog(theme)}>
      <DialogTitle sx={styles.dialogTitle}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.surface100.main}>
          Private Key
        </Typography>
        <IconButton onClick={onClose} sx={{ height: "fit-content" }}>
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
            Project Description
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flex={1}
            border={1}
            borderColor={theme.palette.divider}
            borderRadius={1}
            p={1}>
            <Typography
              variant="subtitle2"
              flex={1}
              color={theme.palette.surface100.main}>
              Nitin
            </Typography>
            <CopyText text="78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36" />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddPrivateKey;
