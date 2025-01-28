import ProjectCardActionMenu from "./project-card-action-menu";

type ComponentProps = {
  projectId: string;
};

const ProjectCardActionButton = ({ projectId = "" }: ComponentProps) => {
  return <ProjectCardActionMenu />;
};

export default ProjectCardActionButton;
