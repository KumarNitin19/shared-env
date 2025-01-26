import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type AddAlertProps = {
  message: string;
  type?: AlertProps["severity"];
  variant?: AlertProps["variant"];
  vPosition: SnackbarOrigin["vertical"];
  hPosition: SnackbarOrigin["horizontal"];
};

interface SnackbarContextProps {
  addAlert: (e: AddAlertProps) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  addAlert: () => {},
});

const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [snackbarQueue, setSnackbarQueue] = useState<AddAlertProps[]>([]);

  useEffect(() => {
    if (snackbarQueue?.length > 0) {
      const timeout = setTimeout(
        () => setSnackbarQueue((prev) => prev.slice(0, prev.length - 1)),
        3000
      );
      return () => clearTimeout(timeout);
    }
  }, [snackbarQueue]);

  const addAlert = useCallback(
    (content: AddAlertProps) => setSnackbarQueue((prev) => [content, ...prev]),
    []
  );

  const value = useMemo(() => ({ addAlert }), [addAlert]);

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {snackbarQueue?.map(
        (
          {
            message = "",
            type = "info",
            variant = "filled",
            vPosition = "top",
            hPosition = "center",
          }: AddAlertProps,
          index: number
        ) => (
          <Snackbar
            key={index}
            open={true}
            anchorOrigin={{ vertical: vPosition, horizontal: hPosition }}
            sx={{
              top:
                vPosition === "top"
                  ? `${24 + index * 62}px !important`
                  : "unset",
              bottom:
                vPosition === "bottom"
                  ? `${24 + index * 62}px !important`
                  : "unset",
            }}>
            <Alert
              severity={type}
              variant={variant}
              onClose={() =>
                setSnackbarQueue((prev) => prev.filter((_, i) => i !== index))
              }
              sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        )
      )}
    </SnackbarContext.Provider>
  );
};
