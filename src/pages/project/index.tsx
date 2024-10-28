import { useParams } from "react-router-dom";
import Projects from "../../molecules/project/components/Projects";
import { KeyValueProp } from "../../types/commonTypes";

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
    <div className="h-full">
      <Projects projects={PROJECT_DATA[projectId]} />
    </div>
  );
};

export default ProjectPage;
