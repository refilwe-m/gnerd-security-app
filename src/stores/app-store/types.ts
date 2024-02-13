export type AppStore = {
  user: { name: string };
  vault: Vault[];
  addVault: (vault: Vault) => void;
};

export type Vault = {
  id: number;
  vaultName: string;
  website?: string;
  username: string;
  password: string;
};
