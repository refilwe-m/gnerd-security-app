import { FC } from "react";

export const Heading: FC = () => {
  return (
    <header className="p-2 flex items-center justify-center w-full">
      <h1 className="text-9xl font-bold text-white">
        <span className="text-purple">G</span>ne
        <span className="text-green">R</span>d Vault
      </h1>
    </header>
  );
};
