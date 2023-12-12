import { useCallback, useEffect } from "react";

const useKey = <T extends Function>(
  event: "keydown" | "keyup" | "keypress" = "keydown",
  targetKey: string,
  handler: T
) => {
  const handleKey = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        handler();
      }
    },
    [handler, targetKey]
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);
    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, targetKey, handleKey]);
};

export default useKey;
