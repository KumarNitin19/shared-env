import { useTheme } from "@mui/material/styles";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { Box } from "../../../atoms/Box";
import { Typography } from "../../../atoms/Typography";
import VariableAccordion from "../variable-accordion";

type ComponentProps = {
  projectId: string;
  isAddENVGroup: boolean;
  handleAddENVGroup: () => void;
  handleCloseENVGroup: () => void;
};

function ProjectPageZeroState({
  projectId = "",
  isAddENVGroup = false,
  handleAddENVGroup = () => {},
  handleCloseENVGroup = () => {},
}: ComponentProps) {
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      height="100%"
      width="100%">
      <Typography
        variant="subtitle2"
        color={palette.surface100.main}
        fontWeight="600">
        Environment Groups
      </Typography>
      {!isAddENVGroup ? (
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
          <Button
            variant="contained"
            startIcon={
              <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
            }
            onClick={handleAddENVGroup}>
            Add Environment Group
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          height="100%"
          overflow="auto">
          {isAddENVGroup ? (
            <VariableAccordion
              groupName="Add Environment Variable"
              isAddVariable
              expanded={true}
              onCancel={handleCloseENVGroup}
              variables={[]}
              projectId={projectId}
            />
          ) : null}
        </Box>
      )}
    </Box>
  );
}

export default ProjectPageZeroState;
