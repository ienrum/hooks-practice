import useTimeoutFn from "./useTimeoutFn";

const useTimeout = <T extends Function>(fn: T, ms: number) => {
  const [run, clear] = useTimeoutFn(fn, ms);
  run();
  return clear;
};

export default useTimeout;
