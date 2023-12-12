import useKey from "@/hooks/useKey";

export default {
  title: "Hook/useKey",
};

export const Default = () => {
  useKey("keydown", "f", () => {
    alert("f key pressed");
  });

  return <>useKey</>;
};
