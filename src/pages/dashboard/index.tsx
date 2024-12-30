import { useTheme } from "@mui/material";
import { Button, Icon } from "../../atoms";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import AddProject from "../../molecules/add-project";
import DashboardPageZeroState from "../../organisms/dashboard/dashboard-page-zero-state";
import ProjectCard from "../../organisms/dashboard/project-card";
import InputField from "../../atoms/TextField";

const DashboardPage = () => {
  const { palette } = useTheme();
  return (
    <Box height="100%">
      {/* <DashboardPageZeroState /> */}
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        alignItems="start"
        px={3}
        py={2}
        height="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%">
          <Typography
            variant="h4"
            fontSize={32}
            fontWeight={400}
            color={palette.surface100.main}>
            Dashboard
          </Typography>
          <Box>
            <InputField placeholder="Search" />
            <AddProject>
              <Button startIcon={<Icon icon="fluent:add-16-regular" />}>
                Add Project
              </Button>
            </AddProject>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          columnGap={3}
          width="100%">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
