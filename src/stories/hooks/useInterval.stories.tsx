import { useState } from "react";
import useInterval from "@/hooks/useInterval";

export default {
  title: "Hooks/useInterval",
  argTypes: {},
};

export const Default = () => {
  const [state, setState] = useState(0);
  const clear = useInterval(() => {
    setState((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <p>state: {state}</p>
      <button onClick={clear}>clear</button>
    </div>
  );
};
