import { FC } from "react";
import { ChildrenProps } from "../../types";

export const AppTemplate: FC<ChildrenProps> = ({ children }) => {
  return (
    <main className="px-3 flex flex-col gap-4">
      <nav className="text-lg py-2 text-white font-light hover:text-green"></nav>
      <section className="px-2 flex flex-col gap-4">{children}</section>
    </main>
  );
};
