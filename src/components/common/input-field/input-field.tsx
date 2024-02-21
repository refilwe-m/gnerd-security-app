import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
  fillerButton?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  placeholder,
  fillerButton = false,
  ...rest
}) => {
  const [field] = useField(rest?.name ?? "");
  return (
    <section className="flex flex-col w-full">
      <section className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center w-full">
        <input
          className={`border w-full ${
            fillerButton
              ? "rounded-lg md:rounded-l-lg md:rounded-none"
              : "rounded-lg"
          } py-2 px-3 focus:ring-2 focus:ring-primary focus:outline-none`}
          placeholder={placeholder}
          {...field}
        />
        {fillerButton && (
          <button
            type="button"
            className="py-3 font-bold w-full px-6 text-xs text-white border border-primary bg-primary rounded-lg md:rounded-r-lg md:rounded-none"
            onClick={() => console.log("Thinking....")}
          >
            Generate Password
          </button>
        )}
      </section>
      <p className="text-red-500 text-xs">{rest.error}</p>
    </section>
  );
};
