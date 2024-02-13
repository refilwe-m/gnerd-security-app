import { create } from "zustand";
import { AppStore } from "./types";

export const useAppStore = create<AppStore>((set) => ({
  user: { name: "John Doe" },
  vault: [
    {
      id: 1,
      vaultName: "Gnerd_Vault",
      website: "www.gnerd.com",
      username: "john.doe",
      password: "password",
    },
  ],
  addVault: (vault) => set((state) => ({ vault: [...state.vault, vault] })),
}));
