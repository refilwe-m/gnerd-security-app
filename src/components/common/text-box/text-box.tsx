import { FC } from "react";

type TextBoxProps = {
  text: string | number;
  label: string;
};

export const TextBox: FC<TextBoxProps> = ({ text, label }) => (
  <section className="flex items-center gap-4 w-full">
    <label className="text-xs w-2/5 font-bold">{label}</label>
    <p className="border w-full text-xs rounded-lg py-2 px-3 ring-2 ring-primary outline-none">
      {text}
    </p>
  </section>
);
