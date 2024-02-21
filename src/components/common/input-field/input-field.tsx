import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
}

export const InputField: FC<InputFieldProps> = ({ placeholder, ...rest }) => {
  const [field] = useField(rest?.name ?? "");
  return (
    <section className="flex flex-col w-full">
      <input
        className="border w-full rounded-lg py-2 px-3 focus:ring-2 focus:ring-primary focus:outline-none"
        placeholder={placeholder}
        {...field}
      />
      <p className="text-red-500 text-xs">{rest.error}</p>
    </section>
  );
};
