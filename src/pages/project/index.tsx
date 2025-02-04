import { useParams } from "react-router-dom";
import Projects from "../../molecules/project/components/Projects";
import { Box } from "../../atoms/Box";
import { useProjects } from "../../query/projectQuery";
import Loader from "../../molecules/loader";
import { useGithubRepos } from "../../query/githubQuery";
import useUser from "../../hooks/useUser";

const ProjectPage = () => {
  const { projectId = "" } = useParams<{ projectId: string }>();
  const { data: projects = [], isPending } = useProjects();
  const userInfo = useUser();
  const { data: githubRepos } = useGithubRepos(
    userInfo?.githubAccessToken || ""
  );

  console.log(githubRepos);
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
      {!isPending ? (
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
      ) : (
        <Loader loader={true} />
      )}
    </Box>
  );
};

export default ProjectPage;
