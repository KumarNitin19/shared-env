import CARD_BACKGROUND_LIGHT from "../../assets/images/sign-in-card-bg.svg";
import CARD_BACKGROUND_DARK from "../../assets/images/sign-in-card-bg-dark.svg";
import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { Typography } from "../../atoms/Typography";
import { useTheme } from "@mui/material";
import { Button } from "../../atoms";

const styles = {
  signInCard: (theme: string) => ({
    backgroundImage: `url(${
      theme === "light" ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK
    })`,
    backgroundSize: "cover",
    backdropFilter: "blur(62px)",
  }),
};

const GeneratePrivateKeyCard = () => {
  const theme = useTheme();
  const { mode } = useThemeToggle();
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
      <Box display="flex" flexDirection="column" gap={4}>
        <Typography
          variant="h4"
          fontSize={32}
          fontWeight={500}
          color={theme.palette.surface100.main}>
          Hey, Nitin! Welcome to VarVault
        </Typography>
        <Typography
          textAlign="center"
          fontSize={20}
          color={theme.palette.surface80.main}>
          Generate your unique private key
        </Typography>
      </Box>
      <Button variant="contained">Generate Private Key</Button>
    </Box>
  );
};

export default GeneratePrivateKeyCard;
