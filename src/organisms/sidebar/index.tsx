import { signOut } from "firebase/auth";
import { auth } from "../../molecules/auth/utils/firebase";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useToast } from "../../hooks/use-toast";
import useUser from "../../hooks/useUser";
import { LoggedInUser } from "../../types/loggedInUser.type";
import React, { useCallback, useState } from "react";
import LOGO_DARK from "../../../src/assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../src/assets/images/varvault-light.svg";
import { Avatar, Divider, Icon } from "../../atoms";
import AddProject from "../../molecules/add-project";
import { Drawer } from "../../atoms/Drawer";
import { Box } from "../../atoms/Box";
import {
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Theme,
  useTheme,
} from "@mui/material";
import { Typography } from "../../atoms/Typography";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { ThemeMode } from "../../providers/ThemeProvider";
import { ToggleThemeIcon } from "../../molecules/toggle-theme-button";

const styles = {
  drawer: (theme: Theme) => ({
    "& .MuiPaper-root": {
      maxWidth: 268,
      bgcolor: theme.palette.sidebarBG.main,
    },
  }),
  divider: {
    marginTop: 1.5,
    marginBottom: 1.5,
    marginX: 3,
  },
  listItem: (theme: Theme, mode: ThemeMode) => ({
    "& .MuiLink-root": {
      width: "100%",
      textDecoration: "none",
      "& .MuiListItemButton-root": {
        textAlign: "center",
        height: 46,
        gap: 1,
        width: "100%",
        borderRadius: 2,
        color: theme.palette.surface80.main,
        "& .MuiListItemIcon-root > svg": {
          color: theme.palette.surface80.main,
        },
        "&.Mui-selected": {
          background: mode === "light" ? "#E7E7E7" : "#282834",
          color: theme.palette.main.main,
          "& .MuiListItemIcon-root > svg": {
            color: theme.palette.main.main,
          },
        },
        "& .MuiListItemIcon-root": {
          minWidth: 20,
        },
        "& .MuiListItemText-root": {
          textAlign: "start",
        },
      },
    },
  }),
  logoutButton: (theme: Theme) => ({
    paddingRight: 2,
    gap: 1,
    color: theme.palette.surface100.main,
    "& .MuiButtonBase-root": {
      borderRadius: 2,
      justifyContent: "space-between",
      gap: 1,
      "& .MuiListItemIcon-root": {
        minWidth: 20,
        "& .MuiAvatar-root": {
          height: 20,
          width: 20,
          fontSize: 12,
        },
      },
    },
  }),
  verticalDivider: {
    height: 12,
    width: "1px",
    borderRightWidth: "thin",
  },
};

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
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage();
  const { toast } = useToast();
  const { mode } = useThemeToggle();
  const theme = useTheme();
  const loggedInUser: LoggedInUser = useUser();

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
    <Drawer
      variant="permanent"
      open={true}
      drawerWidth={268}
      sx={styles.drawer(theme)}>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        paddingTop={4.5}
        paddingBottom={3}
        paddingX={3}>
        <img
          src={mode === "dark" ? LOGO_LIGHT : LOGO_DARK}
          alt="varvault_logo"
          height="20"
          width="28"
        />
        <Typography
          fontSize={18}
          color={theme.palette.surface100.main}
          fontFamily="Outfit"
          fontWeight={500}>
          VarVault
        </Typography>
      </Box>

      <List sx={{ marginX: 3 }}>
        <ListItem
          disablePadding
          title="Dashboard"
          sx={styles.listItem(theme, mode)}>
          <Link href={""}>
            <ListItemButton selected={true}>
              <ListItemIcon>
                <Icon icon="material-symbols:space-dashboard-rounded" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider color="#fff" sx={styles.divider} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
        paddingX={3}>
        <Typography
          variant="subtitle2"
          color="#7B7B7B"
          textTransform="uppercase">
          Projects
        </Typography>
        <IconButton sx={{ padding: 0 }}>
          <Icon icon="fluent:add-square-20-regular" color="#3C7C41" />
        </IconButton>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        height="100%"
        paddingX={3}>
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
                <ListItem
                  disablePadding
                  title={listItem.label}
                  sx={styles.listItem(theme, mode)}>
                  <Link href={""}>
                    <ListItemButton selected={index === 0}>
                      <ListItemIcon>
                        <Icon icon="fluent:document-20-filled" />
                      </ListItemIcon>
                      <ListItemText primary={listItem.label} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </React.Fragment>
          ))}
        </div>

        <List sx={styles.logoutButton(theme)}>
          <ListItem disablePadding title="Logout">
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  name={loggedInUser?.display_name}
                  src={loggedInUser?.profile_image}
                />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
            <Box display="flex" gap={1.5} alignItems="center">
              <IconButton onClick={signOutUser} sx={{ padding: 0 }}>
                <Icon
                  icon="material-symbols:logout"
                  color={theme.palette.surface80.main}
                />
              </IconButton>
              <Divider sx={styles.verticalDivider} />
              <IconButton sx={{ padding: 0 }}>
                <ToggleThemeIcon />
              </IconButton>
            </Box>
          </ListItem>
        </List>
      </Grid>
    </Drawer>
  );
}

export default Sidebar;
