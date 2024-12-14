import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
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
        p={4}
        height="100%">
        <Typography variant="h6">Dashboard</Typography>
        <Typography>All Projects</Typography>
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
