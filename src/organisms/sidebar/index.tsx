import { signOut } from "firebase/auth";
import { auth } from "../../molecules/auth/utils/firebase";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useToast } from "../../hooks/use-toast";
import useUser from "../../hooks/useUser";
import { LoggedInUser } from "../../types/loggedInUser.type";
import React, { useCallback, useState } from "react";
import { useTheme } from "../../providers/theme-providers";
import LOGO_DARK from "../../../src/assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../src/assets/images/varvault-light.svg";
import { Avatar, Divider, Icon } from "../../atoms";
import AddProject from "../../molecules/add-project";
import { Drawer } from "../../atoms/Drawer";
import { Box } from "../../atoms/Box";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Typography } from "../../atoms/Typography";

const styles = {};

const PROJECT_LIST = [
  {
    id: "1",
    label: "Project 1",
  },
  {
    id: "2",
    label: "Project 2",
  },
  {
    id: "3",
    label: "Project 3",
  },
];

const ListSubheaderComponent = ({ listItem, isOpenSideBar }: any) => {
  return isOpenSideBar && listItem.subHeader ? (
    <ListSubheader component="div" id="nested-list-subheader">
      {!listItem?.listItems?.length ? (
        <Box textAlign="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography variant="caption">{listItem.subHeader}</Typography>
            {/* <AddProject /> */}
          </Box>
          <Typography variant="caption" color="#fff">
            Click ‘+’ to create a project
          </Typography>
        </Box>
      ) : (
        <Typography variant="caption">{listItem.subHeader}</Typography>
      )}
    </ListSubheader>
  ) : null;
};

function Sidebar() {
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

  const goToDashboard = useCallback(() => navigate("/dashboard"), []);

  return (
    <Drawer variant="permanent" open={true} drawerWidth={220}>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        paddingY={4.5}
        paddingX={3}>
        <img
          src={theme === "light" ? LOGO_DARK : LOGO_LIGHT}
          alt="varvault_logo"
          height="20"
          width="28"
        />
        <Typography fontSize={18} color="#0B0B0F">
          VarVault
        </Typography>
      </Box>
      <Divider color="#fff" />
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        height="100%">
        <div>
          {PROJECT_LIST.map((listItem, index: number) => (
            <React.Fragment key={index}>
              <List
                key={listItem.id}
                subheader={
                  <ListSubheaderComponent
                    listItem={listItem}
                    isOpenSideBar={true}
                  />
                }>
                <ListItem disablePadding title={listItem.label}>
                  <Link href={""}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon icon={""} />
                      </ListItemIcon>
                      <ListItemText primary={listItem.label} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
              <Divider />
            </React.Fragment>
          ))}
        </div>

        <List>
          <ListItem disablePadding title="Logout">
            <ListItemButton>
              <ListItemIcon>
                <Icon icon="material-symbols:logout" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Drawer>
  );
}

export default Sidebar;

//  <Icon
//               icon="uil:sun"
//               onClick={() => setTheme("dark")}
//             />
//             <Icon
//               icon="basil:moon-outline"
//               onClick={() => setTheme("light")}
//             />

//  <Icon
//    onClick={signOutUser}
//    icon="hugeicons:logout-02"
//  />;

{
  /* <Icon
  icon="fluent:add-square-20-regular"
/>; */
}

// <Icon icon="fluent:document-20-filled" />;
