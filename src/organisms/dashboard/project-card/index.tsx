import { Theme, useTheme } from "@mui/material/styles";
import { Box } from "../../../atoms/Box";
import Card, { CardActions, CardContent } from "../../../atoms/Card";
import { Typography } from "../../../atoms/Typography";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { ProjectData } from "../../../types/project.type";
import ProjectCardActionButton from "../../../molecules/project-card-action-button";

const styles = {
  projectCard: (theme: Theme) => ({
    backgroundColor: theme.palette.sidebarBG.main,
    width: "100%",
    p: 2,
    border: "0.5px solid #00000033",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: 3,
  }),
  cardAction: {
    justifyContent: "end",
    px: 0,
    py: 0,
  },
  cardContent: {
    px: 0,
  },
};

type ComponentProps = {
  projectData: ProjectData;
};

function ProjectCard({ projectData }: ComponentProps) {
  const theme = useTheme();
  return (
    <Card sx={styles.projectCard(theme)}>
      <Box display="flex" alignItems="top" justifyContent="space-between">
        <div>
          <Typography
            variant="subtitle1"
            fontSize={20}
            color={theme.palette.surface100.main}
            fontWeight={500}>
            {projectData?.projectName}
          </Typography>
          <Typography variant="body2" color={theme.palette.surface80.main}>
            Description: {projectData?.projectDescription}
          </Typography>
        </div>
        <ProjectCardActionButton projectData={projectData} />
      </Box>
      <CardContent sx={styles.cardContent}>
        <Box
          display="flex"
          gap={1}
          width="100%"
          className="grid w-full items-center gap-4">
          <Typography
            title="name"
            variant="body2"
            color={theme.palette.surface100.main}>
            Key :
          </Typography>
          <Typography
            title="framework"
            variant="body2"
            color={theme.palette.surface80.main}>
            Value
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={1}
          width="100%"
          className="grid w-full items-center gap-4">
          <Typography
            title="name"
            variant="body2"
            color={theme.palette.surface100.main}>
            Key :
          </Typography>
          <Typography
            title="framework"
            variant="body2"
            color={theme.palette.surface80.main}>
            Value
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={styles.cardAction}>
        <Button
          variant="text"
          size="small"
          endIcon={<Icon icon="material-symbols:arrow-right-alt" />}>
          View All
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
