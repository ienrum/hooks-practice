import { useRef, useEffect } from "react";

const useIntervalFn = <T extends Function>(fn: T, ms: number) => {
  const intervalId = useRef<NodeJS.Timeout>();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = () => {
    intervalId.current && clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      callback.current();
    }, ms);
  };

  const clear = () => {
    intervalId.current && clearInterval(intervalId.current);
  };

  useEffect(() => {
    return clear;
  }, [clear]);

  return [run, clear];
};

export default useIntervalFn;
