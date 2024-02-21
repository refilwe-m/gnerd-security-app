import { create } from "zustand";
import { AppStore } from "./types";

export const defaultVault = {
  id: 0,
  vaultName: "",
  website: "",
  username: "",
  password: "",
};

export const useAppStore = create<AppStore>((set) => ({
  user: { name: "Gugu Mokwena" },
  vault: [
    {
      id: 1,
      vaultName: "Gnerd_Vault",
      website: "www.gnerd.com",
      username: "gugu.mokwena",
      password: "password",
    },
  ],
  addVault: (vault) =>
    set((state) => ({
      vault: [...state.vault, { id: state.vault?.length + 1, ...vault }],
    })),
}));
