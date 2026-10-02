export type PunktStatus = "ok" | "warnung" | "fehler" | "info";
export type PunktStufe = "kritisch" | "wichtig" | "tipp";

export type CheckPunkt = {
  id: string;
  titel: string;
  stufe: PunktStufe;
  status: PunktStatus;
  detail: string;
};

export type GoogleWerte = {
  /** Ladezeit des Hauptinhalts in Millisekunden (75. Perzentil bzw. Testlauf) */
  lcp: number | null;
  /** Layout-Verschiebung (CLS) */
  cls: number | null;
};

export type GoogleDaten = {
  /** Echte Chrome-Nutzerdaten der letzten 28 Tage (CrUX) – für die Seite oder die ganze Domain */
  feld: (GoogleWerte & { quelle: "seite" | "domain" }) | null;
  /** Google-Testlauf (Lighthouse, Handy) */
  labor: GoogleWerte & { leistung: number | null };
};

export type CheckErgebnis = {
  url: string;
  domain: string;
  geprueftAm: string;
  note: number;
  bewertung: string;
  plattform: string | null;
  /** Seite wird erst im Browser per JavaScript aufgebaut – Text und Überschriften nur eingeschränkt prüfbar */
  nurBrowser: boolean;
  punkte: CheckPunkt[];
  google: GoogleDaten | null;
};

export type CheckFehlerCode = "adresse" | "nicht_erreichbar" | "blockiert" | "zu_viele" | "intern";

export type CheckAntwort = { ok: true; ergebnis: CheckErgebnis } | { ok: false; fehler: CheckFehlerCode };
