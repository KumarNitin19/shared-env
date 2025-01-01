import { useTheme } from "@mui/material";
import { Button, Icon } from "../../../atoms";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";
import { Typography } from "../../../atoms/Typography";
import { Box } from "../../../atoms/Box";

const styles = {
  createEnvironmentGroupButton: {
    height: "fit-content",
  },
};

function EnvironmentVariableGroupList() {
  const { palette } = useTheme();
  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Typography
        variant="subtitle2"
        color={palette.surface100.main}
        fontWeight="600">
        Environment Groups
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={5.5}
        alignItems="center"
        margin="auto">
        <Typography
          textAlign="center"
          fontSize={32}
          color={palette.surface80.main}>
          Create environment group to <br /> add variables!
        </Typography>
        <AddEnvironmentGroup>
          <Button
            variant="contained"
            startIcon={
              <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
            }
            sx={styles.createEnvironmentGroupButton}>
            Create Environment Group
          </Button>
        </AddEnvironmentGroup>
      </Box>
    </Box>
  );
}

export default EnvironmentVariableGroupList;
