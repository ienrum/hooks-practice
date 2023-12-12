import { useState, useCallback } from "react";

const useAsyncFn = <T extends (...args: any[]) => any>(
  fn: T,
  deps: Array<any>
): [
  {
    isLoading: boolean;
    error: null | any;
    value: null | any;
  },
  any
] => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    value: null,
  });

  const callback = useCallback((...args: Parameters<T>) => {
    if (!state.isLoading)
      setState({ isLoading: true, error: null, value: null });

    return fn(...args).then(
      (value: any) => {
        setState({ isLoading: false, error: null, value });
        return value;
      },
      (error: any) => {
        setState({ isLoading: false, error, value: null });
        return error;
      }
    );
  }, deps);

  return [state, callback];
};
export default useAsyncFn;
