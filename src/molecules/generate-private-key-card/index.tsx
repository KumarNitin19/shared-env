import CARD_BACKGROUND_LIGHT from "../../assets/images/sign-in-card-bg.svg";
import CARD_BACKGROUND_DARK from "../../assets/images/sign-in-card-bg-dark.svg";
import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Typography } from "../../atoms/Typography";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useCallback, useState } from "react";
import CopyText from "../copy-text";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { ThemeEnum } from "../../providers/ThemeProvider";
import { useGeneratePrivateKey } from "../../query/userQuery";
import { auth } from "../auth/utils/firebase";
import useLocalStorage from "../../hooks/useLocalStorage";

const styles = {
  generateKeyCard: (theme: string) => ({
    backgroundImage: `url(${
      theme === "light" ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK
    })`,
    backgroundSize: "cover",
    backdropFilter: "blur(62px)",
    display: "flex",
    flexDirection: "column",
    width: 566,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    p: 4,
    minHeight: 348,
  }),
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
          privateKey: resp?.privateKey,
        });
        setPrivateKey(resp?.privateKey);
      }
    } catch (error) {}
    setIsGeneratingKey(false);
  }, []);

  const onContinue = useCallback(() => navigate("/dashboard"), []);

  return (
    <Box sx={styles.generateKeyCard(mode)}>
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
              <CopyText
                text="78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36"
                fontSize={20}
              />
              <IconButton sx={{ padding: 0 }}>
                <Icon
                  icon="material-symbols:download-rounded"
                  color={theme.palette.surface100.main}
                  fontSize={20}
                />
              </IconButton>
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
  );
};

export default GeneratePrivateKeyCard;
