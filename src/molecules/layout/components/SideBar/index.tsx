import { Icon } from "@iconify/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../auth/utils/firebase";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { useToast } from "../../../../hooks/use-toast";
import useUser from "../../../../hooks/useUser";
import { LoggedInUser } from "../../../../types/loggedInUser.type";
import { useCallback, useState } from "react";
import { useTheme } from "../../../../providers/theme-providers";
import LOGO_DARK from "../../../..//assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../..//assets/images/varvault-light.svg";
import { Divider } from "../../../../atoms";

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

  const { theme, setTheme } = useTheme();

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

  const goToProject = useCallback((projectId: string) => {
    setActiveProject(projectId);
    navigate(`/projects/${projectId}`);
  }, []);

  return (
    <div className="h-full w-80 flex flex-col justify-between bg-card overflow-auto">
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="p-6 flex items-center gap-3">
          <img
            className="w-6"
            src={theme === "light" ? LOGO_DARK : LOGO_LIGHT}
            alt="varvault_logo"
          />
          <span className="text-lg">VarVault</span>
        </div>

        <div className="p-6 flex-1 flex flex-col gap-5 overflow-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-subtle">PROJECTS</span>
            <Icon
              icon="fluent:add-square-20-regular"
              className="w-5 h-5 cursor-pointer text-accent hover:text-[#3da145] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 items-stretch overflow-auto">
            {PROJECT_LIST.length === 0 ? (
              <span>No projects added</span>
            ) : (
              PROJECT_LIST.map((project) => (
                <div
                  key={project.id}
                  className={`px-4 py-3 flex items-center gap-2 rounded-md cursor-pointer transition-all hover:bg-card-foreground ${
                    activeProject === project.id
                      ? "bg-card-foreground"
                      : "text-subtle"
                  }`}
                  onClick={() => goToProject(project?.id)}>
                  <Icon icon="fluent:document-20-filled" />
                  <span>{project?.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex items-center justify-between">
        <div className="flex h-5 items-center space-x-2">
          <img
            className="h-4 w-4 rounded-full"
            src={loggedInUser?.profile_image}
          />
          <span className="text-subtle">{loggedInUser?.display_name}</span>
        </div>

        <div className="flex h-5 items-center space-x-3 text-subtle transition-all">
          <div title="Sign out">
            <Icon
              onClick={signOutUser}
              icon="hugeicons:logout-02"
              className="w-5 h-5 hover:text-foreground cursor-pointer"
            />
          </div>
          <Divider orientation="vertical" />
          <div
            className="relative flex hover:text-foreground cursor-pointer"
            title="Toggle theme">
            <Icon
              icon="uil:sun"
              className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              onClick={() => setTheme("dark")}
            />
            <Icon
              icon="basil:moon-outline"
              className="absolute w-5 h-5  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              onClick={() => setTheme("light")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
