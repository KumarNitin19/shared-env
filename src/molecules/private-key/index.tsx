import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog, { DialogContent } from "../../atoms/Dialog";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import CopyText from "../copy-text";
import CARD_BACKGROUND_LIGHT from "../../assets/images/sign-in-card-bg.svg";
import CARD_BACKGROUND_DARK from "../../assets/images/sign-in-card-bg-dark.svg";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Icon } from "../../atoms/Icon";
import { ThemeEnum } from "../../providers/ThemeProvider";

const styles = {
  dialog: (theme: string) => ({
    "& .MuiBackdrop-root ": {
      backgroundColor:
        theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
    },
    "& .MuiPaper-root": {
      minWidth: 566,
      width: 566,
      backgroundColor: theme === "light" ? "#f2f2f2" : "unset",
      backgroundImage: `url(${
        theme === "light" ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK
      })`,
      backdropFilter: "blur(62px)",
      backgroundSize: "cover",
      minHeight: 348,
      borderRadius: 6,
    },
  }),

  dialogContent: {
    padding: 5.5,
    display: "grid",
    gap: 6,
  },
  closeButton: {
    height: "fit-content",
    position: "absolute",
    top: 24,
    right: 24,
  },
};

type Props = {
  open: boolean;
  onClose: () => void;
};

const PrivateKey = ({ open = false, onClose = () => {} }: Props) => {
  const theme = useTheme();
  const { mode } = useThemeToggle();
  return (
    <Dialog open={open} sx={styles.dialog(mode)}>
      <IconButton onClick={onClose} sx={styles.closeButton}>
        <Icon
          icon="material-symbols:close-rounded"
          color={theme.palette.surface100.main}
        />
      </IconButton>
      <DialogContent sx={styles.dialogContent}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap={4}>
          <Typography
            title="Private Key!"
            variant="subtitle2"
            fontSize={32}
            color={theme.palette.surface100.main}>
            Private Key!
          </Typography>
          <Typography
            variant="body2"
            fontSize={18}
            color={theme.palette.surface80.main}>
            Here’s your unique private key,
            <br /> keep it safe.
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
          borderRadius={2}
          py={2}
          px={3}
          bgcolor={mode === ThemeEnum.LIGHT ? "#fff" : "#000"}>
          <Typography
            variant="subtitle2"
            flex={1}
            fontSize={20}
            color={theme.palette.surface100.main}>
            00210-00210-00210-00210
          </Typography>
          <CopyText text="78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36" fontSize={20} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PrivateKey;
