import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Divider, Input } from "../../../../atoms";

function EnvironmentVariableGroupList() {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-bold">Environment Groups</span>
        <Button className="flex items-center gap-1" variant={"link"}>
          <Icon icon="fluent:add-16-regular" className="h-4 w-4" />
          Create Environment Group
        </Button>
      </div>
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="p-4 flex flex-col rounded-lg border">
          <div className="pb-5 mb-5 flex flex-col items-start gap-2 border-b">
            <span className="text-sm">Group Name</span>
            <Input
              className="max-w-96"
              type="text"
              placeholder="e.g. Production, DEV, etc."
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold">Variables</span>
              <Divider orientation="vertical" />
              <Button
                className="h-auto p-0 flex items-center gap-1 text-sm"
                variant={"link"}
                size={"sm"}>
                <Icon icon="fluent:add-16-regular" className="h-4 w-4" />
                Add new variable
              </Button>
            </div>
            <div className="w-11/12 flex flex-col gap-2">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <span className="text-sm">Key</span>
                </div>
                <div className="col-span-3">
                  <span className="text-sm">Value</span>
                </div>
              </div>
              {[0, 1].map(() => (
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-2">
                    <Input type="text" placeholder="Enter key" />
                  </div>
                  <div className="col-span-2">
                    <Input type="text" placeholder="Enter value" />
                  </div>
                  <div className="col-span-1"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 self-end flex gap-4">
            <Button className="flex items-center gap-1" variant={"secondary"}>
              Discard
            </Button>
            <Button className="flex items-center gap-1">Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnvironmentVariableGroupList;
