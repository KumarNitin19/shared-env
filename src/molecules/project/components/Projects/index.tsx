import { Icon } from "@iconify/react/dist/iconify.js";
import useCopyToClipboard from "../../../../hooks/useCopyToClipboard";
import EnvironmentVariableGroupList from "../EnvironmentVariableGroupList";
import { Divider, Input } from "../../../../atoms";

function Projects() {
  const { copy } = useCopyToClipboard();

  return (
    <div className="h-full p-8 flex flex-col items-start gap-4">
      <Input
        className="w-auto p-0 text-3xl border-0 placeholder:text-xl"
        type="text"
        placeholder="Enter project name"
        defaultValue={"Project Name"}
      />
      <div className="flex items-center gap-2">
        <span id="project-id" className="text-subtle">
          78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36
        </span>
        <Divider orientation="vertical" />
        <Icon
          onClick={() => copy("project-id")}
          icon="fluent:copy-20-regular"
          className="cursor-pointer"
        />
      </div>
      <div className="w-full p-6 flex-1 flex flex-col gap-4 overflow-auto bg-card rounded-xl">
        {/* <ZeroState /> */}
        <EnvironmentVariableGroupList />
      </div>
    </div>
  );
}

export default Projects;
