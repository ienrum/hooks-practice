import { useEffect } from "react";
import useTimeoutFn from "./useTimeoutFn";

const useDebounce = <T extends Function, V>(
  fn: T,
  ms: number,
  deps: Array<V>
) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(run, deps);
};

export default useDebounce;
