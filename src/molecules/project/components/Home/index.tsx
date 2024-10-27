import { useTheme } from "../../../../providers/theme-providers";
import COMPUTER_HANDS_DARK from "../../../..//assets/images/computer-hands-dark.svg";
import COMPUTER_HANDS_LIGHT from "../../../..//assets/images/computer-hands-light.svg";
import { AddProject } from "../../../add-project";

function Home() {
  const { theme } = useTheme();

  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center">
      <img
        src={theme === "light" ? COMPUTER_HANDS_DARK : COMPUTER_HANDS_LIGHT}
        alt="computer-hands"
      />
      <span className="text-3xl font-bold">Welcome to VarVault</span>
      <span className="text-center text-subtle">
        Ready to dive in? Start your first <br /> project now
      </span>
      <AddProject />
    </div>
  );
}

export default Home;
