import {
  TextField as MuiInputField,
  TextFieldProps,
  Theme,
  useTheme,
} from "@mui/material";

const styles = {
  inputField: (theme: Theme) => ({
    "& .MuiInputBase-root": {
      background: theme.palette.mainBackground.main,
      "& .MuiInputAdornment-root": {
        color: "#717174",
        "& svg": {
          fontSize: 20,
        },
      },
      "& .MuiInputBase-input": {
        paddingY: 0,
        paddingX: 2,
        height: 40,
        color: theme.palette.surface100.main,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.inputBorder.main,
      },
    },
  }),
};

export default function InputField(props: TextFieldProps) {
  const theme = useTheme();
  return (
    <MuiInputField
      {...props}
      sx={{ ...styles.inputField(theme), ...props?.sx }}
    />
  );
}
