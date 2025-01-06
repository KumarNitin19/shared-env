import { useTheme } from "@mui/material";
import { Button, Icon } from "../../../atoms";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";
import { Typography } from "../../../atoms/Typography";
import { Box } from "../../../atoms/Box";
import VariableAccordion from "../variable-accordion";

const styles = {
  createEnvironmentGroupBtn: {
    height: "fit-content",
  },
};

function EnvironmentVariableGroupList() {
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={5}
      height="100%"
      width="100%"
      overflow="hidden">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        lineHeight="normal">
        <Typography
          variant="subtitle2"
          color={palette.surface100.main}
          fontWeight="600">
          Environment Groups
        </Typography>
        <Button
          variant="text"
          size="small"
          startIcon={<Icon icon="fluent:add-16-regular" />}
          sx={styles.createEnvironmentGroupBtn}>
          Create Environment Group
        </Button>
      </Box>
      <Box height="100%" overflow="auto">
        <AddEnvironmentGroup isEdit />
      </Box>
    </Box>
  );
}

export default EnvironmentVariableGroupList;
