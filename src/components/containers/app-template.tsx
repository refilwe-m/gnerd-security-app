import { FC } from "react";
import { ChildrenProps } from "../../types";
import { useAppStore } from "../../stores";

export const AppTemplate: FC<ChildrenProps> = ({ children }) => {
  const { user } = useAppStore();
  return (
    <main className="px-3 flex flex-col gap-4">
      <nav className="text-lg py-2 text-white font-light hover:text-green">
        Hello, {user?.name}
      </nav>
      <section className="px-2 flex flex-col gap-4">{children}</section>
    </main>
  );
};
