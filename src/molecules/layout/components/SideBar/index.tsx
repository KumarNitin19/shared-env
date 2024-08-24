import { Icon } from "@iconify/react";
import { Separator } from "../../../core/design-system/ui/separator";
import { signOut } from "firebase/auth";
import { auth } from "../../../auth/utils/firebase";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { useToast } from "../../../core/design-system/ui/use-toast";
import useUser from "../../../../hooks/useUser";
import { LoggedInUser } from "../../../../types/loggedInUser.type";
import { useState } from "react";

const PROJECT_LIST = [
  {
    id: "1",
    name: "Project 1",
  },
  {
    id: "2",
    name: "Project 2",
  },
  {
    id: "3",
    name: "Project 3",
  },
];

function SideBar() {
  const navigate = useNavigate();

  const { removeItem } = useLocalStorage();

  const { toast } = useToast();

  const loggedInUser: LoggedInUser = useUser();

  const [activeProject, setActiveProject] = useState<string | null>(null);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        removeItem("userDetails");

        toast({
          description: `${loggedInUser?.display_name} logged out.`,
        });
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error(error);
        toast({
          description: `Something went wrong, please try again.`,
        });
      });
  };

  return (
    <div className="h-full w-80 flex flex-col justify-between bg-[#f2f2f2] overflow-auto">
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="p-6 flex items-center gap-3">
          <img className="w-6" src="/varvault_dark.svg" alt="varvault_logo" />
          <span className="text-lg">VarVault</span>
        </div>

        <div className="p-6 flex-1 flex flex-col gap-5 overflow-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#7b7b7b]">PROJECTS</span>
            <Icon
              icon="fluent:add-square-20-regular"
              className="w-5 h-5 cursor-pointer text-[#3c7c41] hover:text-[#3da145] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 items-stretch overflow-auto">
            {PROJECT_LIST.length === 0 ? (
              <span>No projects added</span>
            ) : (
              PROJECT_LIST.map((project) => (
                <div
                  className={`px-4 py-3 flex items-center gap-2 rounded-md  cursor-pointer  transition-all ${
                    activeProject === project.id
                      ? "bg-[#ddd]"
                      : " text-[#7b7b7b] hover:bg-[#ddd4]"
                  }`}
                  onClick={() => setActiveProject(project?.id)}
                >
                  <Icon icon="fluent:document-20-filled" />
                  <span>{project?.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex items-center justify-between text-[#7b7b7b]">
        <div className="flex h-5 items-center space-x-2">
          <img
            className="h-4 w-4 rounded-full"
            src={loggedInUser?.profile_image}
          />
          <span>{loggedInUser?.display_name}</span>
        </div>

        <div className="flex h-5 items-center space-x-3">
          <Icon
            onClick={signOutUser}
            icon="hugeicons:logout-02"
            className="w-5 h-5 cursor-pointer hover:text-black transition-all"
          />
          <Separator orientation="vertical" />
          <Icon
            icon="uil:sun"
            className="w-5 h-5 cursor-pointer hover:text-black transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
