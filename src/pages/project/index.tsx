import { useParams } from "react-router-dom";
import Projects from "../../molecules/project/components/Projects";
import { KeyValueProp } from "../../types/commonTypes";
import { Box } from "../../atoms/Box";

const PROJECT_DATA: KeyValueProp<{ projectName: string }> = {
  ["1"]: {
    projectName: "Project 1",
  },
  ["2"]: {
    projectName: "Project 2",
  },
  ["3"]: {
    projectName: "Project 3",
  },
};

const ProjectPage = () => {
  const { projectId = "1" } = useParams<{ projectId: string }>();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      alignItems="start"
      px={3}
      py={2}
      height="100%">
      <Projects projects={PROJECT_DATA[projectId]} />
    </Box>
  );
};

export default ProjectPage;
