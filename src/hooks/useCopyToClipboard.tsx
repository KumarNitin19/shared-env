import { useCallback, useState } from "react";
import { useToast } from "./use-toast";

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { toast, dismiss } = useToast();

  const copy = useCallback((text: string) => {
    if (text) {
      setIsCopied(true);
      navigator.clipboard.writeText(text);
      const timeout = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timeout);
        dismiss();
      }, 1500);

      toast({
        description: `Copied to clipboard.`,
      });
    }
  }, []);

  return { copy, isCopied };
}
