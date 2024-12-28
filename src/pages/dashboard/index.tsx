import { Button, Icon } from "../../atoms";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import AddProject from "../../molecules/add-project";
import DashboardPageZeroState from "../../organisms/dashboard/dashboard-page-zero-state";
import ProjectCard from "../../organisms/dashboard/project-card";

const DashboardPage = () => {
  return (
    <Box height="100%">
      {/* <DashboardPageZeroState /> */}
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
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
            color="#0B0B0F">
            Dashboard
          </Typography>
          <AddProject>
            <Button startIcon={<Icon icon="fluent:add-16-regular" />}>
              Add Project
            </Button>
          </AddProject>
        </Box>
        <Typography fontSize={16} fontWeight={500}>
          All Projects
        </Typography>
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
