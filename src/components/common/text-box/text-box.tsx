import { FC, useState } from "react";
import { ImCopy } from "react-icons/im";
import { Button } from "..";
import toast from "react-hot-toast";

type TextBoxProps = {
  text: string | number;
  label: string;
};

export const TextBox: FC<TextBoxProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);
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
      <section className="border w-full flex justify-between items-center text-xs rounded-lg px-3 border-primary">
        <p>{text}</p>
        <section>
          <Button onClick={copyToClipboard} variant="text">
            <ImCopy
              onClick={copyToClipboard}
              className={`hover:text-primary hover:text-base ${
                copied ? "text-green" : "text-gray-200"
              }`}
            />
          </Button>
        </section>
      </section>
    </section>
  );
};
