import { Outlet } from "react-router-dom";
import SideBar from "../../../../organisms/sidebar";
import { Box } from "../../../../atoms/Box";

function WithSidebar() {
  return (
    <Box bgcolor="#f7f7f7" height="100%">
      <SideBar />
      <Box
        maxWidth="calc(100% - 220px)"
        ml="auto"
        bgcolor="#f7f7f7"
        height="100%">
        <Outlet />
      </Box>
    </Box>
  );
}

export default WithSidebar;
