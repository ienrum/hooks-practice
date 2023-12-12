import { useEffect, useRef } from "react";
import useRafState from "./useRafState";

export type ScrollType =
  | [React.MutableRefObject<any>, { x: number; y: number }];

const useScroll = (): ScrollType => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current! as HTMLElement;
    if (!element) return;

    const handleScroll = () => {
      setState({ x: element.scrollLeft, y: element.scrollTop });
      console.log(element.scrollLeft, element.scrollTop);
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => element.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return [ref, state];
};

export default useScroll;
