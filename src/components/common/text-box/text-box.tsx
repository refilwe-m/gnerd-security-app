import { FC, useState } from "react";
import { ImCopy } from "react-icons/im";
import { Button } from "..";

type TextBoxProps = {
  text: string | number;
  label: string;
};

export const TextBox: FC<TextBoxProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(text.toString());
  };
  return (
    <section className="flex items-center gap-4 w-full">
      <label className="text-xs w-2/5 font-bold">{label}</label>
      <section className="border w-full flex justify-between items-center text-xs rounded-lg py-2 px-3 ring-2 ring-primary outline-none">
        <p>{text}</p>
        <section>
          <Button onClick={copyToClipboard} variant="text">
            <ImCopy
              onClick={copyToClipboard}
              className={`hover:text-primary hover:text-base ${
                copied ? "text-green" : "text-black"
              }`}
            />
          </Button>
        </section>
      </section>
    </section>
  );
};
