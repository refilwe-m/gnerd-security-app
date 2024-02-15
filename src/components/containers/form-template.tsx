import { FC } from "react";
import { ChildrenProps } from "../../types";

export const FormTemplate: FC<ChildrenProps> = ({ children }) => (
  <section className="px-4">{children}</section>
);
