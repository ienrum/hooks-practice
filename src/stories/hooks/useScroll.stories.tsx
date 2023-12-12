import useScroll from "@/hooks/useScroll";

export default {
  title: "Hook/useScroll",
};

export const Default = () => {
  const [ref, scroll] = useScroll();

  return (
    <>
      <div ref={ref} className="w-20 h-20 bg-slate-600 overflow-auto">
        <div className="w-96 h-96 bg-slate-500" />
      </div>
      <button
        onClick={() =>
          ref.current.scrollTo({ top: 2000, left: 2000, behavior: "smooth" })
        }
      >
        Scroll to top
      </button>
      {scroll.x},{scroll.y}
    </>
  );
};
