import { Box, Typography } from "@mui/material";
import { Button, CardContent, Label } from "../../../atoms";
import Card, { CardActions } from "../../../atoms/Card";

function ProjectCard() {
  return (
    <Card className="w-full">
      <Box>
        <Typography className="text-subtle">Create project</Typography>
        <Typography>Deploy your new project in one-click.</Typography>
      </Box>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-subtle">
                Name
              </Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-subtle">
                Framework
              </Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardActions className="flex justify-between">
        <Button>View All</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
