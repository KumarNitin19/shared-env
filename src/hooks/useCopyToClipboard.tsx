import { useCallback } from "react";
import { useToast } from "../molecules/core/design-system/ui/use-toast";

export default function useCopyToClipboard() {
  const { toast } = useToast();

  const copy = useCallback((tagId: string) => {
    const copyText = document.getElementById(tagId);

    if (copyText) {
      navigator.clipboard.writeText(copyText.innerHTML);

      toast({
        description: `Copied to clipboard.`,
      });
    }
  }, []);

  return { copy };
}
