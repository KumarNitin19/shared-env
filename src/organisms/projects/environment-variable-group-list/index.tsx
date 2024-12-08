import { Button, Icon } from "../../../atoms";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";

function EnvironmentVariableGroupList() {
  return (
    <div className="grid row-gap-6">
      <div className="flex items-center justify-between">
        <span className="font-bold">Environment Groups</span>
        <AddEnvironmentGroup>
          <Button variant="text" className="p-0 h-fit">
            <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
            Create Environment Group
          </Button>
        </AddEnvironmentGroup>
      </div>
    </div>
  );
}

export default EnvironmentVariableGroupList;
