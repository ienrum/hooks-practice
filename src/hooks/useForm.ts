import { useState, ComponentProps } from "react";

export interface Props<V> {
  initialValues: V;
  onSubmit: (values: V) => void;
  validate?: (values: V) => V;
}

const useForm = <V extends object>({
  initialValues,
  onSubmit,
  validate,
}: Props<V>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<V | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: ComponentProps<"input">["onChange"] = (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const validationErrors = validate ? validate(values) : undefined;
    if (!undefined) {
      await onSubmit(values);
    }
    setErrors(validationErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
export default useForm;
