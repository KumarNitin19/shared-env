import {
  default as MUIDrawer,
  DrawerProps as MUIDrawerProps,
} from "@mui/material/Drawer";
import { Theme, styled, CSSObject } from "@mui/material/styles";

const openedMixin = (theme: Theme, drawerwidth: number): CSSObject => ({
  width: drawerwidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const CustomDrawer = styled(MUIDrawer, {
  shouldForwardProp: (prop: string) => prop !== "open",
})(
  ({
    theme,
    open,
    drawerwidth,
  }: {
    theme?: Theme;
    open?: boolean;
    drawerwidth: number;
  }) => ({
    width: drawerwidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiPaper-root": { zIndex: 1 },
    ...(open &&
      theme && {
        ...openedMixin(theme, drawerwidth),
        "& .MuiDrawer-paper": openedMixin(theme, drawerwidth),
      }),
    ...(!open &&
      theme && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
  })
);
interface CustomDrawerProp extends MUIDrawerProps {
  drawerWidth?: number;
}
export const Drawer: React.FC<CustomDrawerProp> = ({
  drawerWidth = 268,
  ...props
}) => {
  return <CustomDrawer {...props} drawerwidth={drawerWidth} />;
};
