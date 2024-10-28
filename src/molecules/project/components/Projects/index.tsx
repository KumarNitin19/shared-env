// import useCopyToClipboard from "../../../../hooks/useCopyToClipboard";
// import EnvironmentVariableGroupList from "../../../../organisms/projects/environment-variable-group-list";
import { Divider, Input } from "../../../../atoms";
import ZeroState from "../../../../organisms/projects/enviornment-zero-state/zeroState";
import CopyText from "../../../copy-text";

type Props = {
  projects: {
    projectName: string;
  };
};

function Projects({ projects }: Props) {
  const { projectName } = projects;
  return (
    <div className="h-full p-8 flex flex-col items-start gap-4">
      <Input
        className="w-auto p-0 text-3xl border-0 placeholder:text-xl"
        type="text"
        placeholder="Enter project name"
        value={projectName}
      />
      <div className="flex items-center gap-2">
        <span id="project-id" className="text-subtle">
          78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36
        </span>
        <Divider orientation="vertical" />
        <CopyText text="78F9A2E7-9C1B-4A8D-AE67-82DF7D1F5C36" />
      </div>
      <div className="w-full p-6 flex-1 flex flex-col gap-4 overflow-auto bg-card rounded-xl shadow dark:shadow-[#3b3c45]">
        <ZeroState />
        {/* <EnvironmentVariableGroupList /> */}
      </div>
    </div>
  );
}

export default Projects;
