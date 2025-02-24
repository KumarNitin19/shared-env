import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Typography } from "../../atoms/Typography";
import { useTheme } from "@mui/material/styles";
import { useCallback, useEffect, useState } from "react";
import CopyText from "../copy-text";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { ThemeEnum } from "../../providers/ThemeProvider";
import { useGeneratePrivateKey } from "../../query/userQuery";
import { auth } from "../auth/utils/firebase";
import useLocalStorage from "../../hooks/useLocalStorage";
import DownloadJSON from "../download-json";
import useUser from "../../hooks/useUser";
import CardWithGradientBorder from "../card-with-gradient-border";

const styles = {
  generateKeyCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    p: 4,
    borderRadius: 6,
  },
  generateApiKeyButton: {
    "&.Mui-disabled": {
      color: "#fff",
    },
  },
};

const GeneratePrivateKeyCard = () => {
  const [isGeneratingKey, setIsGeneratingKey] = useState<boolean>(false);
  const [privateKey, setPrivateKey] = useState<string>("");
  const theme = useTheme();
  const user = useUser();
  const { mode } = useThemeToggle();
  const navigate = useNavigate();
  const { getItem, setItem } = useLocalStorage();
  const { mutateAsync: generatePrivateKey } = useGeneratePrivateKey();

  const generateKey = useCallback(async () => {
    setIsGeneratingKey(true);
    try {
      const resp = await generatePrivateKey();
      if (resp?.privateKey) {
        const userDetails = getItem("userDetails");
        const idToken = await auth?.currentUser?.getIdToken(true);
        setItem("userDetails", {
          ...userDetails,
          userToken: idToken,
          varVaultPrivateKey: resp?.privateKey,
        });
        setPrivateKey(resp?.privateKey);
      }
    } catch (error) {}
    setIsGeneratingKey(false);
  }, []);

  useEffect(() => {
    if (user?.varVaultPrivateKey) {
      setPrivateKey(user?.varVaultPrivateKey);
    }
  }, [user]);

  const onContinue = useCallback(() => navigate("/dashboard"), []);

  return (
    <CardWithGradientBorder>
      <Box className="card-container" sx={styles.generateKeyCard}>
        <Box display="flex" textAlign="center" flexDirection="column" gap={4}>
          <Typography
            variant="h4"
            fontSize={32}
            fontWeight={500}
            color={theme.palette.surface100.main}>
            Hey, Nitin! <br /> Welcome to VarVault
          </Typography>
          {!privateKey ? (
            <Typography
              textAlign="center"
              fontSize={20}
              color={theme.palette.surface80.main}>
              Generate your unique private key
            </Typography>
          ) : (
            <Typography
              textAlign="center"
              fontSize={20}
              color={theme.palette.surface80.main}>
              Here’s your unique private key, <br /> keep it safe.
            </Typography>
          )}
        </Box>
        {privateKey ? (
          <>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={2.5}
              flex={1}
              borderRadius={2}
              py={2}
              px={3}
              bgcolor={mode === ThemeEnum.LIGHT ? "#fff" : "#000"}
              width="100%">
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
                {/* <IconButton sx={{ padding: 0 }}>
               
              </IconButton> */}
              </Box>
            </Box>
            <Button variant="contained" onClick={onContinue}>
              Continue
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            startIcon={
              isGeneratingKey ? (
                <Icon icon="line-md:loading-twotone-loop" />
              ) : null
            }
            disabled={isGeneratingKey}
            onClick={generateKey}
            sx={styles.generateApiKeyButton}>
            {isGeneratingKey ? "Generating..." : "Generate Private Key"}
          </Button>
        )}
      </Box>
    </CardWithGradientBorder>
  );
};

export default GeneratePrivateKeyCard;
