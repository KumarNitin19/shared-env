import { useCallback, useState } from "react";

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = useCallback((text: string) => {
    if (text) {
      setIsCopied(true);
      navigator.clipboard.writeText(text);
      const timeout = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timeout);
      }, 1500);
    }
  }, []);

  return { copy, isCopied };
}
