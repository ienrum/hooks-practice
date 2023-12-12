import { useState } from "react";
import useIntervalFn from "@/hooks/useIntervalFn";

export default {
  title: "Hooks/useIntervalFn",
  argTypes: {},
};

export const Default = () => {
  const [state, setState] = useState(0);
  const [start, clear] = useIntervalFn(() => {
    setState((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <p>state: {state}</p>
      <button onClick={start}>start</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
