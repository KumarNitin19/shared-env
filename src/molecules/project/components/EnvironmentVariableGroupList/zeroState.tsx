import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../../atoms";

function ZeroState() {
  return (
    <>
      <span className="">Environment Variables</span>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <span className="text-3xl text-subtle text-center">
          Create environment group to <br /> add variables!
        </span>
        <Button className="mt-6 px-8 flex gap-2">
          <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
          Create Environment Group
        </Button>
      </div>
    </>
  );
}

export default ZeroState;
