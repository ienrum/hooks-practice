import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";

export default {
  title: "Hooks/useDebounce",
  argTypes: {},
};

export const Default = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  useDebounce(
    () => {
      setValue(input);
    },
    300,
    [input]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>value: {value}</p>
    </div>
  );
};
