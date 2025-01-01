import { IconButton } from "@mui/material";
import { Icon } from "../../atoms";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

type Props = {
  text: string;
};

function CopyText({ text = "" }: Props) {
  const { copy, isCopied } = useCopyToClipboard();
  if (isCopied) {
    return <Icon icon="material-symbols:check" color="green" />;
  }
  return (
    <IconButton sx={{ padding: 0 }}>
      <Icon
        onClick={() => copy(text)}
        icon="fluent:copy-20-regular"
        className="cursor-pointer"
      />
    </IconButton>
  );
}

export default CopyText;
