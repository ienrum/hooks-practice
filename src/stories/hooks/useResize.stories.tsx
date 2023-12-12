import useResize from "@/hooks/useResize";
import { useState } from "react";

export default {
  title: "Hook/useResize",
};

export const Default = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const ref = useResize((rect) => {
    setImageSize({ width: rect.width, height: rect.height });
  });

  return (
    <div ref={ref} className="w-96 h-96 bg-slate-600">
      <img
        src="https://picsum.photos/1000"
        className="w-20 h-20"
        style={{ width: imageSize.width, height: imageSize.height }}
      />
    </div>
  );
};
