import { Button, Icon } from "../../../atoms";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";

function ZeroState() {
  return (
    <>
      <span className="">Environment Variables</span>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <span className="text-3xl text-subtle text-center">
          Create environment group to <br /> add variables!
        </span>
        <AddEnvironmentGroup>
          <Button className="mt-6 px-8 flex gap-2">
            <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
            Create Environment Group
          </Button>
        </AddEnvironmentGroup>
      </div>
    </>
  );
}

export default ZeroState;
