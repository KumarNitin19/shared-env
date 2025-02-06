import {
  AutocompleteProps,
  default as MuiAutocomplete,
} from "@mui/material/Autocomplete";
import InputField from "./TextField";

export default function Autocomplete(
  props: AutocompleteProps<string, boolean, boolean, boolean>
) {
  return (
    <MuiAutocomplete
      {...props}
      renderInput={(params) => <InputField {...params} label="Controllable" />}
    />
  );
}
