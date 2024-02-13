import { FC } from "react";
import { ChildrenProps } from "../../types";

export const AppTemplate: FC<ChildrenProps> = ({ children }) => {
  return <main className="px-3 flex flex-col gap-4">{children}</main>;
};
