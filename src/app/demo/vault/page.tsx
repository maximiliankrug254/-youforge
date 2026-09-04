import { VaultPage } from "@/components/demo/vault/VaultPage";

/** Keine statische 404-Prerender mehr — die alte notFound()-Seite hing im CDN. */
export const dynamic = "force-dynamic";

export default function VaultDemoPage() {
  return <VaultPage />;
}
