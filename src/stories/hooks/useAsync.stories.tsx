import useAsync from "@/hooks/useAsync";

export default {
  title: "Hooks/useAsync",
  argTypes: {},
};

const successPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });

const failedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("failed");
    }, 1000);
  });

export const Success = () => {
  const state = useAsync(async () => {
    const res = await successPromise();
    return res;
  }, []);

  return (
    <div>
      <p>state: {JSON.stringify(state)}</p>
    </div>
  );
};

export const Error = () => {
  const state = useAsync(async () => {
    const res = await failedPromise();
    return res;
  }, []);

  return (
    <div>
      <p>state: {JSON.stringify(state)}</p>
    </div>
  );
};
