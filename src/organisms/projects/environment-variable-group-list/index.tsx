import { Button, Divider, Icon, Input } from "../../../atoms";

function EnvironmentVariableGroupList() {
  return (
    <div className="grid row-gap-6">
      <div className="flex items-center justify-between">
        <span className="font-bold">Environment Groups</span>
        <Button className="flex items-center gap-1" variant="link">
          <Icon icon="fluent:add-16-regular" className="h-4 w-4" />
          Create Environment Group
        </Button>
      </div>
    </div>
  );
}

export default EnvironmentVariableGroupList;
