import { useCallback, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Icon } from "../../../atoms/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Theme, useTheme } from "@mui/material";
import { useThemeToggle } from "../../../hooks/useThemeToggle";
import { ThemeEnum, ThemeMode } from "../../../providers/ThemeProvider";

const styles = {
  iconButton: {
    height: "fit-content",
    width: "fit-content",
  },
  menu: (theme: Theme) => ({
    "& .MuiPaper-root": {
      borderRadius: 1.5,
      background: theme.palette.mainBackground.main,
    },
  }),
  menuItem: (theme: Theme, mode: ThemeMode) => ({
    "&.MuiButtonBase-root": {
      gap: 1,
      "&:hover": {
        background:
          mode === ThemeEnum.DARK ? "rgb(208 208 208 / 0.06)" : "auto",
        "& .MuiTypography-root": {
          fontWeight: 500,
        },
        "& .MuiListItemIcon-root": {
          color: theme.palette.surface100.main,
        },
      },
      "& .MuiListItemIcon-root": {
        minWidth: "auto",
        color: theme.palette.surface80.main,
      },
      "& .MuiTypography-root": {
        fontSize: 14,
        color: theme.palette.surface100.main,
      },
    },
  }),
};

type ComponentProps = {
  handleEdit: () => void;
  handleDelete: () => void;
};

const ProjectCardActionMenu: React.FC<ComponentProps> = ({
  handleEdit = () => {},
  handleDelete = () => {},
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const { mode } = useThemeToggle();

  const handleOpenMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleEditClick = useCallback(() => {
    handleEdit();
    handleCloseMenu();
  }, [handleEdit, handleCloseMenu]);

  const handleDeleteClick = useCallback(() => {
    handleDelete();
    handleCloseMenu();
  }, [handleEdit, handleCloseMenu]);

  return (
    <div>
      <IconButton onClick={handleOpenMenu} sx={styles.iconButton}>
        <Icon
          icon="material-symbols:more-vert"
          color={theme.palette.surface80.main}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        sx={styles.menu}>
        <MenuItem onClick={handleEditClick} sx={styles.menuItem(theme, mode)}>
          <ListItemIcon>
            <Icon icon="material-symbols:edit-outline-rounded" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={styles.menuItem(theme, mode)}>
          <ListItemIcon>
            <Icon icon="material-symbols:delete-outline" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProjectCardActionMenu;
