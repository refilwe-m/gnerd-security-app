import { FC } from "react";
import { ChildrenProps } from "../../types";
import { NavBar } from "..";

export const AppTemplate: FC<ChildrenProps> = ({ children }) => {
  return (
    <main className="px-3 flex flex-col gap-4">
      <NavBar />
      <section className="px-2 flex flex-col gap-4">{children}</section>
    </main>
  );
};
