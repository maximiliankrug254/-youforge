import { redirect } from "next/navigation";

/** Alte Novus-Demo → generische Pitch-Demo Aurea */
export default function NovusHairRedirectPage() {
  redirect("/demo/aurea");
}
