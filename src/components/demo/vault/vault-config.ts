export const VAULT = {
  brand: {
    short: "VAULT",
    house: "Vault Destillerie",
    line: "Single Malt · Speyside",
    tagline: "Drei Reifestufen. Ein Haus.",
  },
  place: {
    glen: "Glen of Allt",
    region: "Speyside",
    country: "Scotland",
    warehouse: "Dunnage East",
    tz: "Europe/London",
  },
  contact: {
    phoneTel: "+441340000000",
    phoneDisplay: "+44 1340 000 000",
    email: "allocation@vault-malt.test",
  },
  youforge: {
    label: "Living Demo",
    studio: "YouForge",
    href: "/",
  },
} as const;

export const VAULT_ASSETS = "/demo/vault";

export const VAULT_IMG = {
  warehouse: `${VAULT_ASSETS}/warehouse.jpg`,
  stills: `${VAULT_ASSETS}/stills.jpg`,
  caskEnd: `${VAULT_ASSETS}/cask-end.jpg`,
  casksRow: `${VAULT_ASSETS}/casks-row.jpg`,
  pour: `${VAULT_ASSETS}/pour.jpg`,
  glass: `${VAULT_ASSETS}/glass.jpg`,
  tasting: `${VAULT_ASSETS}/tasting.jpg`,
  liquid: `${VAULT_ASSETS}/liquid.jpg`,
  bottle08: `${VAULT_ASSETS}/bottle-08.jpg`,
  bottle12: `${VAULT_ASSETS}/bottle-12.jpg`,
  bottle21: `${VAULT_ASSETS}/bottle-21.jpg`,
} as const;

export const VAULT_NAV = [
  { href: "#hero", label: "Vault", labelEn: "Vault" },
  { href: "#casks", label: "Fässer", labelEn: "Casks" },
  { href: "#taste", label: "Genuss", labelEn: "Taste" },
  { href: "#craft", label: "Handwerk", labelEn: "Craft" },
  { href: "#house", label: "Haus", labelEn: "House" },
  { href: "#ledger", label: "Zuteilung", labelEn: "Ledger" },
] as const;
