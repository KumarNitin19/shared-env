import CARD_BACKGROUND_LIGHT from "../../assets/images/sign-in-card-bg.svg";
import CARD_BACKGROUND_DARK from "../../assets/images/sign-in-card-bg-dark.svg";
import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Typography } from "../../atoms/Typography";
import { useTheme } from "@mui/material";
import { Button, Icon } from "../../atoms";
import { useCallback, useState } from "react";

const styles = {
  signInCard: (theme: string) => ({
    backgroundImage: `url(${
      theme === "light" ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK
    })`,
    backgroundSize: "cover",
    backdropFilter: "blur(62px)",
  }),
  generateApiKeyButton: {
    "&.Mui-disabled": {
      color: "#fff",
    },
  },
};

const GeneratePrivateKeyCard = () => {
  const [isGeneratingKey, setIsGeneratingKey] = useState<boolean>(false);
  const theme = useTheme();
  const { mode } = useThemeToggle();

  const generateKey = useCallback(() => {
    setIsGeneratingKey(true);
    setTimeout(() => {
      setIsGeneratingKey(false);
    }, 2000);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth={566}
      minHeight={348}
      alignItems="center"
      justifyContent="center"
      gap={6}
      sx={styles.signInCard(mode)}>
      <Box display="flex" textAlign="center" flexDirection="column" gap={4}>
        <Typography
          variant="h4"
          fontSize={32}
          fontWeight={500}
          color={theme.palette.surface100.main}>
          Hey, Nitin! <br /> Welcome to VarVault
        </Typography>
        <Typography
          textAlign="center"
          fontSize={20}
          color={theme.palette.surface80.main}>
          Generate your unique private key
        </Typography>
      </Box>
      <Button
        variant="contained"
        startIcon={
          isGeneratingKey ? <Icon icon="line-md:loading-twotone-loop" /> : null
        }
        disabled={isGeneratingKey}
        onClick={generateKey}
        sx={styles.generateApiKeyButton}>
        {isGeneratingKey ? "Generating..." : "Generate Private Key"}
      </Button>
    </Box>
  );
};

export default GeneratePrivateKeyCard;
