import { useTheme } from "@mui/material";
import { Button, Icon } from "../../../atoms";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";
import { Typography } from "../../../atoms/Typography";
import { Box } from "../../../atoms/Box";

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
    </Box>
  );
}

export default EnvironmentVariableGroupList;
