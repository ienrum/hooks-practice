import { useRef, useState, useCallback } from "react";

export type returnValue<T> = [T, (value: T) => void];

const useRafState = <T>(initialState: T): returnValue<T> => {
  const frame = useRef(0);

  const [state, setState] = useState<T>(initialState);

  const setRafState = useCallback((value: T) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  return [state, setRafState];
};

export default useRafState;
