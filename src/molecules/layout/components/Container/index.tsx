import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

function Container() {
  return (
    <div className="w-screen h-screen flex overflow-auto">
      <SideBar />
      <div className="w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
