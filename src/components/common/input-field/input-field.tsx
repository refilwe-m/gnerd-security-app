import { useField } from "formik";
import { FC, InputHTMLAttributes} from "react";

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
  const [field,,helpers] = useField(rest?.name ?? "");
 
  const generatePassword = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

  const l_sequence = Array.from({ length: Math.floor(Math.random() * 6) }, () => letters[Math.floor(Math.random() * letters.length)]);
  const n_sequence = Array.from({ length: Math.floor(Math.random() * 4) }, () => numbers[Math.floor(Math.random() * numbers.length)]);
  const s_sequence = Array.from({ length: Math.floor(Math.random() * 2) }, () => symbols[Math.floor(Math.random() * symbols.length)]);

  const password = l_sequence.concat(n_sequence, s_sequence).sort(() => Math.random() - 0.5).join("");

  if (password.length < 6) {
    return generatePassword(); 
  }
    helpers.setValue(password);
    return generatePassword(); 
  };

  return (
    <section className="flex flex-col w-full">
      <section className="flex justify-between items-center w-full">
        <input
          className={`border w-full ${
            fillerButton ? "rounded-l-lg" : "rounded-lg"
          } py-2 px-3 focus:ring-2 focus:ring-primary focus:outline-none`}
          placeholder={placeholder}
          {...field}
        />
        {fillerButton && (
          <button
            type="button"
            className=" py-3 font-bold w-full px-6 text-xs text-white border border-primary bg-primary rounded-r-lg"
            onClick={() => generatePassword()}
          >
            Generate Password
          </button>
        )}
      </section>
      <p className="text-red-500 text-xs">{rest.error}</p>
    </section>
  );
};
