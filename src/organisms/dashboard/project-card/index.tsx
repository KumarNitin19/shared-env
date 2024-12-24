import { Button, CardContent, Label } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import Card, { CardActions } from "../../../atoms/Card";
import { Typography } from "../../../atoms/Typography";

const styles = {
  projectCard: {
    width: "100%",
  },
  cardAction: {
    justifyContent: "end",
  },
};

function ProjectCard() {
  return (
    <Card sx={styles.projectCard}>
      <Box>
        <Typography>Create project</Typography>
        <Typography variant="body2">
          Deploy your new project in one-click.
        </Typography>
      </Box>
      <CardContent>
        <Box
          display="grid"
          rowGap={1}
          width="100%"
          className="grid w-full items-center gap-4">
          <Typography title="name">Name</Typography>
          <Typography title="framework">Framework</Typography>
        </Box>
      </CardContent>
      <CardActions sx={styles.cardAction}>
        <Button variant="text">View All</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
