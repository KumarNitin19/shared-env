import { Icon } from "@iconify/react";
import { useTheme } from "../../../../providers/theme-providers";
import { Button } from "../../../core/design-system/ui/button";
import COMPUTER_HANDS_DARK from "../../../..//assets/images/computer-hands-dark.svg";
import COMPUTER_HANDS_LIGHT from "../../../..//assets/images/computer-hands-light.svg";

function Home() {
  const { theme } = useTheme();

  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center">
      <img
        src={theme === "light" ? COMPUTER_HANDS_DARK : COMPUTER_HANDS_LIGHT}
        alt="computer-hands"
      />
      <span className="text-default text-3xl font-bold">
        Welcome to VarVault
      </span>
      <span className="text-center text-subtle">
        Ready to dive in? Start your first <br /> project now
      </span>
      <Button className="mt-6 px-8 flex gap-2 bg-accent text-white">
        <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
        Create Project
      </Button>
    </div>
  );
}

export default Home;
