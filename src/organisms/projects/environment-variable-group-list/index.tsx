import { Button, Icon } from "../../../atoms";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";

const styles = {
  createEnvironmentGroupButton: {
    height: "fit-contetn",
  },
};

function EnvironmentVariableGroupList() {
  return (
    <div className="grid row-gap-6">
      <div className="flex items-center justify-between">
        <span className="font-bold">Environment Groups</span>
        <AddEnvironmentGroup>
          <Button
            variant="text"
            startIcon={
              <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
            }
            sx={styles.createEnvironmentGroupButton}>
            Create Environment Group
          </Button>
        </AddEnvironmentGroup>
      </div>
    </div>
  );
}

export default EnvironmentVariableGroupList;
