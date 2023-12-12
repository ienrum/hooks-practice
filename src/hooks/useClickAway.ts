import { useEffect, useRef } from "react";

const events = ["mousedown", "touchstart"] as const;

const useClickAway = (handler: Function) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const savedHandler = useRef(handler);

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);

    if (!element) return;

    const handleEvent = (event: MouseEvent | TouchEvent) => {
      if (element && !(element as HTMLElement).contains(event.target as Node)) {
        savedHandler.current(event);
      }
    };

    events.forEach((event) => {
      document.addEventListener(event, handleEvent);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleEvent);
      });
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
