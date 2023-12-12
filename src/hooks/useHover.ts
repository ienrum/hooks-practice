import { useState, useEffect, useRef, useCallback } from "react";

export type HoverResult = [React.MutableRefObject<any>, boolean];

const useHover = (): HoverResult => {
  const [state, setState] = useState(false);

  const ref = useRef();

  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const node = ref.current! as HTMLElement;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, state];
};

export default useHover;
