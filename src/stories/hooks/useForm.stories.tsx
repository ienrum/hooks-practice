import useForm from "@/hooks/useForm";

export default {
  title: "Hooks/useForm",
};

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

export const Default = () => {
  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await sleep();
      alert(JSON.stringify(values));
    },
    validate: (values) => {
      const errors = { email: "", password: "" };
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!/^.+@.+\..+$/.test(values.email)) errors.email = "Email is invalid";
      return errors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        {errors?.email}
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
        {errors?.password}
      </div>
      <div>
        <button type="submit">{isLoading ? "loading..." : "Submit"}</button>
      </div>
    </form>
  );
};
