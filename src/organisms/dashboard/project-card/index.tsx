import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
} from "../../../atoms";

function ProjectCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-subtle">Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
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
      <CardFooter className="flex justify-between">
        <Button>View All</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
