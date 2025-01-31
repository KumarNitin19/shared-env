import { useParams } from "react-router-dom";
import Projects from "../../molecules/project/components/Projects";
import { Box } from "../../atoms/Box";
import { useProjects } from "../../query/projectQuery";

const ProjectPage = () => {
  const { projectId = "" } = useParams<{ projectId: string }>();
  const { data: projects = [] } = useProjects();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      alignItems="start"
      px={3}
      py={2}
      height="100%"
      overflow="hidden">
      <Projects
        projects={
          projects.find((project) => project?.projectId === projectId) || {
            id: "",
            projectDescription: "",
            projectId: "",
            projectName: "",
            uid: "",
            groups: [],
          }
        }
      />
    </Box>
  );
};

export default ProjectPage;
