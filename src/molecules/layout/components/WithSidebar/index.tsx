import { Outlet } from "react-router-dom";
import SideBar from "../../../../organisms/sidebar";
import { Box } from "../../../../atoms/Box";
import { useTheme } from "@mui/material";

function WithSidebar() {
  const theme = useTheme();
  return (
    <Box bgcolor="#f7f7f7" height="100%">
      <SideBar />
      <Box
        maxWidth="calc(100% - 268px)"
        ml="auto"
        bgcolor={theme.palette.mainBackground.main}
        height="100%">
        <Outlet />
      </Box>
    </Box>
  );
}

export default WithSidebar;
