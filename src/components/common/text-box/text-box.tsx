import { FC, useState } from "react";
import { ImCopy, ImEye, ImEyeBlocked } from "react-icons/im";
import toast from "react-hot-toast";

type TextBoxProps = {
  text: string | number;
  label: string;
};

export const TextBox: FC<TextBoxProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);
  const [hidden, setHidden] = useState(true);
  const toggleSecurity = () => setHidden(!hidden);

  const isPassword = label === "Password";
  const copyToClipboard = () => {
    setCopied(true);
    toast.success("Copied to Clipboard", {
      duration: 600,
    });
    navigator.clipboard.writeText(text.toString());
  };

  return (
    <section className="flex items-center gap-4 text-white w-full">
      <label className="text-xs w-2/5 font-bold">{label}</label>
      <section className="border py-2 w-full flex justify-between items-center text-xs rounded-lg px-3 border-primary">
        <p>{hidden && isPassword ? "*********" : text}</p>
        <section className="flex items-center gap-2">
          <button onClick={() => toggleSecurity()}>
            {isPassword && hidden ? (
              <ImEyeBlocked
                className={`text-sm ${copied ? "text-green" : "text-gray-200"}`}
              />
            ) : (
              isPassword &&
              !hidden && (
                <ImEye
                  className={`text-sm ${
                    copied ? "text-green" : "text-gray-200"
                  }`}
                />
              )
            )}
          </button>
          <button onClick={copyToClipboard}>
            <ImCopy
              onClick={copyToClipboard}
              className={`hover:text-primary hover:text-base ${
                copied ? "text-green" : "text-gray-200"
              }`}
            />
          </button>
        </section>
      </section>
    </section>
  );
};
