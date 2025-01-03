import { useTheme } from "@mui/material";
import { Button, Icon } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import { Typography } from "../../../atoms/Typography";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";

function ProjectPageZeroState() {
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
        <AddEnvironmentGroup />
        <Button
          variant="contained"
          startIcon={<Icon icon="fluent:add-16-regular" className="h-5 w-5" />}>
          Create Environment Group
        </Button>
      </Box>
    </Box>
  );
}

export default ProjectPageZeroState;
