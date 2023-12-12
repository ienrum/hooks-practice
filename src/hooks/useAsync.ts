import { useEffect } from "react";
import useAsyncFn from "./useAsyncFn";

const useAsync = <T extends (...args: any[]) => any>(
  fn: T,
  deps: Array<any>
): any => {
  const [state, callback] = useAsyncFn(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
