import {
  AutocompleteProps,
  default as MuiAutocomplete,
} from "@mui/material/Autocomplete";
import InputField from "./TextField";
import { Theme, useTheme } from "@mui/material";
import { useThemeToggle } from "../hooks/useThemeToggle";

const styles = {
  popper: (theme: Theme, mode: string) => ({
    "& .MuiAutocomplete-paper": {
      width: 520,
      backgroundColor: theme.palette.sidebarBG.main,
      color: theme.palette.main.main,
      "& .MuiAutocomplete-option.Mui-focused": {
        backgroundColor: mode === "dark" ? "#242430" : "auto",
      },
    },
  }),
  autocomplete: (theme: Theme) => ({}),
};

interface CustomAutocompleteProps
  extends Omit<
    AutocompleteProps<string, boolean, boolean, boolean, "div">,
    "renderInput"
  > {
  renderInput?: AutocompleteProps<
    string,
    boolean,
    boolean,
    boolean,
    "div"
  >["renderInput"];
}

export default function Autocomplete(props: CustomAutocompleteProps) {
  const theme = useTheme();
  const { mode } = useThemeToggle();
  return (
    <MuiAutocomplete
      {...props}
      renderInput={(params) => <InputField {...params} label="Controllable" />}
      slotProps={{
        popper: {
          sx: styles.popper(theme, mode),
        },
      }}
      sx={{ ...styles.autocomplete(theme), ...props?.sx }}
    />
  );
}
