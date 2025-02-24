import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";

type JsonData = {
  [key: string]: string;
};

type Props = {
  fileData: JsonData | Array<JsonData>;
  buttonElement: React.ReactNode;
  fileName?: string;
};

const DownloadJSON = ({
  fileData = {},
  buttonElement,
  fileName = "data.json",
}: Props) => {
  const createAndDownloadJSON = useCallback(() => {
    const jsonString = JSON.stringify(fileData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [fileData, fileName]);

  return (
    <IconButton onClick={createAndDownloadJSON} sx={{ padding: 0 }}>
      {buttonElement}
    </IconButton>
  );
};

export default DownloadJSON;
