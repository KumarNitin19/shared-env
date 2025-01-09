import SideBar from "../../../../organisms/sidebar";
import { Box } from "../../../../atoms/Box";
import { useTheme } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import PrivateKey from "../../../private-key";

function WithSidebar() {
  const [isOpenPrivateKeyDialog, setIsOpenPrivateKeyDialog] =
    useState<boolean>(false);
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location.pathname]);

  const handleOpenPrivateKeyDialog = useCallback(
    () => setIsOpenPrivateKeyDialog(true),
    []
  );
  const handleClosePrivateKeyDialog = useCallback(
    () => setIsOpenPrivateKeyDialog(false),
    []
  );

  return (
    <Box bgcolor="#f7f7f7" height="100%">
      <SideBar
        isOpenPrivateKeyDialog={isOpenPrivateKeyDialog}
        handleViewPrivateKey={handleOpenPrivateKeyDialog}
      />
      <Box
        maxWidth="calc(100% - 268px)"
        ml="auto"
        bgcolor={theme.palette.mainBackground.main}
        height="100%">
        <Outlet />
      </Box>
      <PrivateKey
        open={isOpenPrivateKeyDialog}
        onClose={handleClosePrivateKeyDialog}
      />
    </Box>
  );
}

export default WithSidebar;
