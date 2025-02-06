import {
  AutocompleteProps,
  default as MuiAutocomplete,
} from "@mui/material/Autocomplete";
import InputField from "./TextField";

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
  return (
    <MuiAutocomplete
      {...props}
      renderInput={(params) => <InputField {...params} label="Controllable" />}
    />
  );
}
