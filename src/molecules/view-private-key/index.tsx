import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog, { DialogContent } from "../../atoms/Dialog";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import CopyText from "../copy-text";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Icon } from "../../atoms/Icon";
import { ThemeEnum } from "../../providers/ThemeProvider";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import CardWithGradientBorder from "../card-with-gradient-border";
import DownloadJSON from "../download-json";

const styles = {
  dialog: (theme: string) => ({
    "& .MuiBackdrop-root ": {
      backgroundColor:
        theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
    },
    "& .MuiPaper-root": {
      borderRadius: 6,
      background: "transparent",
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

const ViewPrivateKey = ({ open = false, onClose = () => {} }: Props) => {
  const [privateKey, setPrivateKey] = useState<string>("");
  const theme = useTheme();
  const { mode } = useThemeToggle();
  const user = useUser();

  useEffect(() => {
    if (user && user?.varVaultPrivateKey) {
      setPrivateKey(user?.varVaultPrivateKey);
    }
  }, [user]);

  return (
    <Dialog open={open} sx={styles.dialog(mode)}>
      <CardWithGradientBorder>
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
            gap={2.5}
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
              {privateKey}
            </Typography>
            <Box display="flex" gap={1}>
              <CopyText text={privateKey} fontSize={20} />
              <DownloadJSON
                fileData={{
                  privateKey,
                }}
                buttonElement={
                  <Icon
                    icon="material-symbols:download-rounded"
                    color={theme.palette.surface100.main}
                    fontSize={20}
                  />
                }
                fileName="varVaultPrivateKey.json"
              />
            </Box>
          </Box>
        </DialogContent>
      </CardWithGradientBorder>
    </Dialog>
  );
};

export default ViewPrivateKey;
