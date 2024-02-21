import { FC } from "react";
import { ChildrenProps } from "../../types";

export const FormTemplate: FC<ChildrenProps> = ({ children }) => (
  <section className="flex flex-col gap-2 items-center justify-center w-full px-4">
    {children}
  </section>
);
