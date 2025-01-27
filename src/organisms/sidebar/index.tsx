import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import React, { useCallback, useEffect, useState } from "react";
import LOGO_DARK from "../../../src/assets/images/varvault-dark.svg";
import LOGO_LIGHT from "../../../src/assets/images/varvault-light.svg";
import { Drawer } from "../../atoms/Drawer";
import { Box } from "../../atoms/Box";
import { Theme, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { Typography } from "../../atoms/Typography";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { ThemeEnum, ThemeMode } from "../../providers/ThemeProvider";
import { ToggleThemeIcon } from "../../molecules/toggle-theme-button";
import { Icon } from "../../atoms/Icon";
import { Divider } from "../../atoms/Divider";
import { Avatar } from "../../atoms/Avatar";
import { logout } from "../../query/userQuery";
import { useProjects } from "../../query/projectQuery";

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
        "&.Mui-selected, &:hover": {
          background: mode === ThemeEnum.LIGHT ? "#E7E7E7" : "#282834",
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
  logoutButton: (theme: Theme, mode: ThemeMode) => ({
    paddingRight: 2,
    gap: 1,
    color: theme.palette.surface100.main,
    "& .MuiListItem-root > .MuiButtonBase-root": {
      borderRadius: 2,
      justifyContent: "space-between",
      gap: 1,
      "& .MuiListItemIcon-root": {
        minWidth: 20,
        "& svg": {
          color: theme.palette.surface80.main,
        },
        "& .MuiAvatar-root": {
          height: 20,
          width: 20,
          fontSize: 12,
        },
      },
    },
    "& .MuiListItemButton-root": {
      "&:hover": {
        background: mode === ThemeEnum.LIGHT ? "#E7E7E7" : "#282834",
        color: theme.palette.main.main,
        "& .MuiListItemIcon-root > svg": {
          color: theme.palette.main.main,
        },
      },
    },
  }),
  verticalDivider: {
    height: 12,
    width: "1px",
    borderRightWidth: "thin",
  },
  privateKeyListItem: (theme: Theme) => ({
    "&.MuiListItemButton-root": {
      color: theme.palette.surface80.main,
    },
  }),
};

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

function Sidebar({
  isOpenPrivateKeyDialog = false,
  handleViewPrivateKey,
}: {
  isOpenPrivateKeyDialog: boolean;
  handleViewPrivateKey: () => void;
}) {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("/");

  const location = useLocation();
  const navigate = useNavigate();
  const { mode } = useThemeToggle();
  const theme = useTheme();
  const loggedInUser = useUser();
  const { data: projects = [] } = useProjects();

  useEffect(() => {
    setSelectedMenuItem(location.pathname);
  }, [location.pathname]);

  const goToProject = useCallback((projectId: string) => {
    navigate(`/project/${projectId}`);
  }, []);

  const goToDashboard = useCallback(() => {
    navigate("/dashboard");
  }, []);

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
          <Link>
            <ListItemButton
              selected={selectedMenuItem === "/dashboard"}
              onClick={goToDashboard}>
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
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        height="100%"
        paddingX={3}>
        <div>
          {projects?.map((project, index: number) => (
            <React.Fragment key={index}>
              <List
                key={project?.projectId}
                subheader={
                  <ListSubheaderComponent
                    listItem={project}
                    isOpenSideBar={true}
                  />
                }>
                <ListItem
                  disablePadding
                  title={project?.projectName}
                  sx={styles.listItem(theme, mode)}>
                  <Link>
                    <ListItemButton
                      selected={
                        selectedMenuItem === `/project/${project?.projectId}`
                      }
                      onClick={() => goToProject(project?.projectId)}>
                      <ListItemIcon>
                        <Icon icon="fluent:document-20-filled" />
                      </ListItemIcon>
                      <ListItemText primary={project?.projectName} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </React.Fragment>
          ))}
        </div>

        <List sx={styles.logoutButton(theme, mode)}>
          <ListItem disablePadding title="Private Key">
            <ListItemButton
              selected={isOpenPrivateKeyDialog}
              onClick={handleViewPrivateKey}
              sx={styles.privateKeyListItem(theme)}>
              <ListItemIcon>
                <Icon icon="material-symbols:passkey" />
              </ListItemIcon>
              <ListItemText primary="Private Key" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding title="Logout">
            <ListItemButton
              onClick={logout}
              sx={{ justifyContent: "space-between" }}>
              <Box display="flex" gap={1} alignItems="center">
                <ListItemIcon>
                  <Avatar
                    name={loggedInUser?.name}
                    src={loggedInUser?.picture}
                  />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </Box>
              <IconButton sx={{ padding: 0 }}>
                <Icon
                  icon="material-symbols:logout"
                  color={theme.palette.surface80.main}
                />
              </IconButton>
            </ListItemButton>
            <Box display="flex" gap={1.5} alignItems="center">
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
