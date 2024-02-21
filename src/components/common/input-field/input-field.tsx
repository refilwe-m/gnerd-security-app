import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";
import { Button } from "..";

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
      <section className="flex justify-between items-center w-full">
        <input
          className={`border w-full rounded${
            fillerButton ? "-l" : ""
          }-lg py-2 px-3 focus:ring-2 focus:ring-primary focus:outline-none`}
          placeholder={placeholder}
          {...field}
        />
        {fillerButton && (
          <Button
            variant="filled"
            styles="text-xs text-white border border-primary bg-primary rounded-r-lg py-2"
            onClick={() => console.log("Thinking....")}
          >
            Generate Password
          </Button>
        )}
      </section>
      <p className="text-red-500 text-xs">{rest.error}</p>
    </section>
  );
};
