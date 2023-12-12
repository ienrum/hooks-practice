import useTimeout from "@/hooks/useTimeout";

export default {
  title: "Hooks/useTimeout",
  argTypes: {},
};

export const Default = () => {
  const clear = useTimeout(() => alert(1), 1000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};
