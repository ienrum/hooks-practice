import useAsyncFn from "@/hooks/useAsyncFn";

export default {
  title: "Hooks/useAsyncFn",
  argTypes: {},
};

const successPromise = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });

const failedPromise = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(time);
    }, time);
  });

export const Success = () => {
  const [state, fetch] = useAsyncFn(async () => {
    const res = await successPromise(1000);
    return res;
  }, []);

  return (
    <div>
      <p>state: {JSON.stringify(state)}</p>
      <button onClick={fetch}>fetch</button>
    </div>
  );
};

export const Error = () => {
  const [state, fetch] = useAsyncFn(async () => {
    const res = await failedPromise(1000);
    return res;
  }, []);

  return (
    <div>
      <p>state: {JSON.stringify(state)}</p>
      <button onClick={fetch}>fetch</button>
    </div>
  );
};
