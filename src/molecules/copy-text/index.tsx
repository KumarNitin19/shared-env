import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { Icon } from "../../atoms/Icon";

type Props = {
  text: string;
  fontSize?: number;
};

function CopyText({ text = "", fontSize = 16 }: Props) {
  const theme = useTheme();
  const { copy, isCopied } = useCopyToClipboard();
  if (isCopied) {
    return (
      <Icon icon="material-symbols:check" color="green" fontSize={fontSize} />
    );
  }
  return (
    <IconButton onClick={() => copy(text)} sx={{ padding: 0 }}>
      <Icon
        icon="fluent:copy-20-regular"
        color={theme.palette.surface100.main}
        fontSize={fontSize}
      />
    </IconButton>
  );
}

export default CopyText;
