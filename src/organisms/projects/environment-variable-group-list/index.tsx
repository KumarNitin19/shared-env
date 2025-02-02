import { useTheme } from "@mui/material/styles";
import { Typography } from "../../../atoms/Typography";
import { Box } from "../../../atoms/Box";
import VariableAccordion from "../variable-accordion";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { useCallback, useState } from "react";
import { ENVGroup } from "../../../types/envGroup.type";

const styles = {
  createEnvironmentGroupBtn: {
    height: "fit-content",
  },
};

function EnvironmentVariableGroupList({
  projectId = "",
  groupDetail = [],
}: {
  projectId: string;
  groupDetail: Array<ENVGroup>;
}) {
  const [isAddENVGroup, setIsAddENVGroup] = useState<boolean>(false);
  const { palette } = useTheme();

  const handleAddENVGroup = useCallback(() => setIsAddENVGroup(true), []);

  const handleCloseENVGroup = useCallback(() => setIsAddENVGroup(false), []);

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
            title="Add Environment Variable"
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
                title={group?.groupName}
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
