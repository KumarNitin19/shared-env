import { Box } from "../../../../atoms/Box";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { lazy, useCallback, useState } from "react";

const Sidebar = lazy(() => import("../../../../organisms/sidebar"));
const ViewPrivateKey = lazy(() => import("../../../view-private-key"));

function WithSidebar() {
  const [isOpenPrivateKeyDialog, setIsOpenPrivateKeyDialog] =
    useState<boolean>(false);
  const theme = useTheme();

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
      <Sidebar
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
      <ViewPrivateKey
        open={isOpenPrivateKeyDialog}
        onClose={handleClosePrivateKeyDialog}
      />
    </Box>
  );
}

export default WithSidebar;
