import { useTheme } from "@mui/material";
import BACKGROUD_IMAGE from "../../assets/images/bg-pattern.png";
import { Box } from "../../atoms/Box";
import { ToggleThemeIcon } from "../../molecules/toggle-theme-button";

const styles = {
  signInContainer: {
    backgroundImage: `url(${BACKGROUD_IMAGE})`,
    backgroundSize: "cover",
  },
};

const GeneratePrivateKeyPage = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      bgcolor={theme.palette.mainBackground.main}
      sx={styles.signInContainer}>
      <Box position="absolute" top={0} right={0} m={2} p={1} borderRadius={2}>
        <ToggleThemeIcon />
      </Box>
    </Box>
  );
};

export default GeneratePrivateKeyPage;
