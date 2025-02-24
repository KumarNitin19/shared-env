import { useTheme } from "@mui/material/styles";
import { Typography } from "../../../atoms/Typography";
import { Box } from "../../../atoms/Box";
import VariableAccordion from "../variable-accordion";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { ENVGroup } from "../../../types/envGroup.type";

type ComponentProps = {
  projectId: string;
  groupDetail: Array<ENVGroup>;
  handleAddENVGroup: () => void;
  handleCloseENVGroup: () => void;
  isAddENVGroup: boolean;
};

const styles = {
  createEnvironmentGroupBtn: {
    height: "fit-content",
  },
};

function EnvironmentVariableGroupList({
  isAddENVGroup = false,
  projectId = "",
  groupDetail = [],
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
          disabled={isAddENVGroup}
          onClick={handleAddENVGroup}
          sx={styles.createEnvironmentGroupBtn}>
          Add Environment Group
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        height="100%"
        overflow="auto">
        {isAddENVGroup || groupDetail?.length === 0 ? (
          <VariableAccordion
            groupName="Add Environment Variable"
            isAddVariable
            expanded={true}
            onCancel={handleCloseENVGroup}
            variables={[]}
            projectId={projectId}
          />
        ) : null}
        {groupDetail?.length
          ? groupDetail?.map((group: ENVGroup) => (
              <VariableAccordion
                key={group?.groupId}
                groupId={group?.groupId}
                groupName={group?.groupName}
                variables={group?.variables || []}
                expanded={false}
                projectId={projectId}
              />
            ))
          : null}
      </Box>
    </Box>
  );
}

export default EnvironmentVariableGroupList;
