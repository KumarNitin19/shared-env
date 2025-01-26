import { useContext } from "react";
import { SnackbarContext } from "../providers/SnackbarProvider";

const useSnackbar = () => useContext(SnackbarContext);

export default useSnackbar;
