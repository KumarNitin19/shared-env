import { ButtonProps, Button as MUIButton } from "@mui/material";

const styles = {
  button: {
    height: 40,
    borderRadius: 2,
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
    "&.MuiButton-sizeSmall": {
      fontSize: 13,
      "&.MuiButton-text": {
        height: 24,
      },
    },
    "& .iconify": {
      fontSize: "18px !important",
    },
  },
};

export const Button = ({ variant = "contained", ...props }: ButtonProps) => {
  return (
    <MUIButton
      variant={variant}
      {...props}
      sx={{ ...styles.button, ...props?.sx }}
    />
  );
};
