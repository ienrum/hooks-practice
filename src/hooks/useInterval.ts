import { useEffect } from "react";
import useIntervalFn from "./useIntervalFn";

const useInterval = <T extends Function>(fn: T, ms: number) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [clear, run]);

  return clear;
};

export default useInterval;
