import useHover from "@/hooks/useHover";

export default {
  title: "Hook/useHover",
};

export const Default = () => {
  const [ref, hover] = useHover();

  return (
    <>
      <div ref={ref} className="w-9 h-9 bg-slate-600" />
      {hover ? "True" : "False"}
    </>
  );
};
