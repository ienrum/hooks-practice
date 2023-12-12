import useLocalStorage from "@/hooks/useLocalStorage";

export default {
  title: "Hooks/useLocalStorage",
};

export const Default = () => {
  const [status, setStatus] = useLocalStorage("status", "off");

  const toggleStatus = () => {
    setStatus(status === "off" ? "on" : "off");
  };

  return (
    <div>
      <button onClick={toggleStatus}>Toggle Status</button>
      <div>{status}</div>
    </div>
  );
};
