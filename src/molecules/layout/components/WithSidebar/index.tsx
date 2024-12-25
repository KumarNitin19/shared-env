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
        paddingTop={2}
        bgcolor="#F2F2F2"
        height="100%">
        <Box bgcolor="#ffffff" height="100%" sx={{ borderTopLeftRadius: 12 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default WithSidebar;
