import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const InputField: FC<InputFieldProps> = ({ placeholder, ...rest }) => {
  const [field] = useField(rest?.name ?? "");
  return (
    <input
      className="border w-full rounded-lg py-2 px-3"
      placeholder={placeholder}
      {...field}
    />
  );
};
