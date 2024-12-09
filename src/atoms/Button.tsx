import { ButtonProps, Button as MUIButton } from "@mui/material";

const styles = {
  button: {
    height: 40,
    "&.MuiButton-contained": {
      background: "#3c7c41",
    },
    "&.MuiButton-outlined": {
      color: "#3c7c41",
      borderColor: "#3c7c41",
      "&:hover": {
        backgroundColor: "#3c7c410a",
      },
    },
    "&.MuiButton-text": {
      paddingY: 0,
      color: "#3c7c41",
      "&:hover": {
        backgroundColor: "#3c7c410a",
      },
    },
  },
};

export const Button = (props: ButtonProps) => {
  return <MUIButton {...props} sx={{ ...styles.button, ...props?.sx }} />;
};
