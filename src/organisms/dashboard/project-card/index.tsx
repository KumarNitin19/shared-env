import { useTheme } from "@mui/material";
import { Button, CardContent, Icon, Label } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import Card, { CardActions } from "../../../atoms/Card";
import { Typography } from "../../../atoms/Typography";

const styles = {
  projectCard: {
    width: "100%",
    p: 2,
    border: "0.5px solid #00000033",
    boxShadow: "none",
    borderRadius: 3,
  },
  cardAction: {
    justifyContent: "end",
    px: 0,
    py: 0,
  },
  cardContent: {
    px: 0,
  },
};

function ProjectCard() {
  const theme = useTheme();
  return (
    <Card sx={styles.projectCard}>
      <Box>
        <Typography
          variant="subtitle1"
          fontSize={20}
          color={theme.palette.surface100.main}
          fontWeight={500}>
          Project Name
        </Typography>
        <Typography variant="body2">
          Description: Deploy your new project in one-click.
        </Typography>
      </Box>
      <CardContent sx={styles.cardContent}>
        <Box
          display="flex"
          gap={1}
          width="100%"
          className="grid w-full items-center gap-4">
          <Typography title="name" variant="body2">
            Key :
          </Typography>
          <Typography title="framework" variant="body2">
            Value
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={1}
          width="100%"
          className="grid w-full items-center gap-4">
          <Typography title="name" variant="body2">
            Key :
          </Typography>
          <Typography title="framework" variant="body2">
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
