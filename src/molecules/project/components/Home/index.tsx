import { Button } from "../../../core/design-system/ui/button";
import { Icon } from "@iconify/react";

function Home() {
  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center">
      <img src="/computer-hands.svg" alt="varvault_logo" />
      <span className="text-3xl font-bold">Welcome to VarVault</span>
      <span className="text-center">
        Ready to dive in? Start your first <br /> project now
      </span>
      <Button className="mt-6 px-8 flex gap-3">
        <Icon icon="fluent:add-16-regular" className="h-5 w-5" />
        Create Project
      </Button>
    </div>
  );
}

export default Home;
