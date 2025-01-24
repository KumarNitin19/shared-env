// import useCopyToClipboard from "../../../../hooks/useCopyToClipboard";
// import EnvironmentVariableGroupList from "../../../../organisms/projects/environment-variable-group-list";
import { useTheme } from "@mui/material/styles";
import { Typography } from "../../../../atoms/Typography";
import EnvironmentVariableGroupList from "../../../../organisms/projects/environment-variable-group-list";
import CopyText from "../../../copy-text";
import { Box } from "../../../../atoms/Box";
// import ProjectPageZeroState from "../../../../organisms/projects/project-page-zero-state";
import { Divider } from "../../../../atoms/Divider";
import { Button } from "../../../../atoms/Button";
import { Icon } from "../../../../atoms/Icon";

type Props = {
  projects: {
    projectName: string;
  };
};

function Projects({ projects }: Props) {
  const { projectName } = projects;
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2.5}
      height="100%"
      width="100%">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="grid" rowGap={1}>
          <Typography
            variant="h4"
            fontSize={32}
            fontWeight={400}
            color={palette.surface100.main}>
            {projectName}
          </Typography>
          <Box display="flex" gap={1.25} alignItems="center">
            <Typography color={palette.surface80.main} variant="subtitle1">
              78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36
            </Typography>
            <Divider orientation="vertical" sx={{ height: 12 }} />
            <CopyText text="78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36" />
          </Box>
        </Box>
        <Button startIcon={<Icon icon="material-symbols:add" />}>Share</Button>
      </Box>
      <Box
        flex={1}
        width="100%"
        p={2.5}
        borderRadius={3}
        overflow="auto"
        bgcolor={palette.surface20.main}>
        {/* <ProjectPageZeroState /> */}
        <EnvironmentVariableGroupList />
      </Box>
    </Box>
  );
}

export default Projects;
