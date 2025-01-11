import { IconButton, useTheme } from "@mui/material";
import BACKGROUD_IMAGE from "../../assets/images/bg-pattern.png";
import { Box } from "../../atoms/Box";
import { ToggleThemeIcon } from "../../molecules/toggle-theme-button";
import GeneratePrivateKeyCard from "../../molecules/generate-private-key-card";
import { Icon } from "../../atoms";

const styles = {
  signInContainer: {
    backgroundImage: `url(${BACKGROUD_IMAGE})`,
    backgroundSize: "cover",
  },
  //   iconWrapper:{
  //     display:"felx"
  //   }
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
      <GeneratePrivateKeyCard />
      <Box
        display="flex"
        gap={2}
        position="absolute"
        top={0}
        right={0}
        m={2}
        p={1}
        borderRadius={2}>
        <ToggleThemeIcon />
        <IconButton sx={{ padding: 0 }}>
          <Icon
            icon="material-symbols:logout"
            color={theme.palette.surface80.main}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default GeneratePrivateKeyPage;
