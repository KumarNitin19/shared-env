import { IconButton, useTheme } from "@mui/material";
import { Icon } from "../../atoms";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

type Props = {
  text: string;
};

function CopyText({ text = "" }: Props) {
  const theme = useTheme();
  const { copy, isCopied } = useCopyToClipboard();
  if (isCopied) {
    return <Icon icon="material-symbols:check" color="green" />;
  }
  return (
    <IconButton onClick={() => copy(text)} sx={{ padding: 0 }}>
      <Icon
        icon="fluent:copy-20-regular"
        color={theme.palette.surface100.main}
      />
    </IconButton>
  );
}

export default CopyText;
