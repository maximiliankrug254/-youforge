export type BriefingChoice = {
  value: string;
  label: string;
};

export type BriefingStep =
  | {
      id: string;
      question: string;
      hint?: string;
      type: "text" | "email" | "textarea";
      placeholder?: string;
      required?: boolean;
    }
  | {
      id: string;
      question: string;
      hint?: string;
      type: "choice";
      options: BriefingChoice[];
      required?: boolean;
    }
  | {
      id: string;
      question: string;
      hint?: string;
      type: "website";
      required?: boolean;
    };

export const briefingSteps: BriefingStep[] = [
  {
    id: "name",
    question: "Wie heißt du?",
    type: "text",
    placeholder: "Dein Name",
    required: true,
  },
  {
    id: "email",
    question: "Wie erreichen wir dich?",
    type: "email",
    placeholder: "deine@email.de",
    required: true,
  },
  {
    id: "company",
    question: "Unternehmen oder Projektname?",
    type: "text",
    placeholder: "z. B. Meisterbetrieb Müller",
    required: true,
  },
  {
    id: "need",
    question: "Was brauchst du?",
    type: "choice",
    options: [
      { value: "website", label: "Website" },
      { value: "landingpage", label: "Landingpage" },
      { value: "webapp", label: "Web-App" },
      { value: "ki", label: "KI / Automatisierung" },
      { value: "other", label: "Sonstiges" },
    ],
    required: true,
  },
  {
    id: "goal",
    question: "Was ist dein Hauptziel?",
    hint: "Ein Satz reicht.",
    type: "text",
    placeholder: "z. B. Mehr Anfragen über die Website",
    required: true,
  },
  {
    id: "website",
    question: "Hast du schon eine Website?",
    type: "website",
    required: true,
  },
  {
    id: "pain",
    question: "Was stört dich am meisten?",
    hint: "Beim digitalen Auftritt oder in deinen Abläufen.",
    type: "text",
    placeholder: "Kurz beschreiben…",
    required: true,
  },
  {
    id: "content",
    question: "Hast du Texte & Bilder?",
    type: "choice",
    options: [
      { value: "yes", label: "Ja, alles da" },
      { value: "partial", label: "Teilweise" },
      { value: "no", label: "Nein, brauche Unterstützung" },
    ],
    required: true,
  },
  {
    id: "timeline",
    question: "Wann soll es live gehen?",
    type: "choice",
    options: [
      { value: "asap", label: "So schnell wie möglich" },
      { value: "1-2", label: "In 1–2 Monaten" },
      { value: "3+", label: "In 3+ Monaten" },
      { value: "flex", label: "Flexibel" },
    ],
    required: true,
  },
  {
    id: "budget",
    question: "Budget-Rahmen?",
    hint: "Optional: Notiz unten — hilft uns bei der Einschätzung.",
    type: "choice",
    options: [
      { value: "under2k", label: "Unter 2.000 €" },
      { value: "2-5k", label: "2.000 – 5.000 €" },
      { value: "5k+", label: "Über 5.000 €" },
      { value: "open", label: "Noch offen" },
    ],
    required: true,
  },
];

export function formatBriefingForEmail(
  answers: Record<string, string>
): string {
  const lines = briefingSteps.map((step) => {
    const raw = answers[step.id] ?? "—";
    if (step.type === "choice") {
      const label =
        step.options.find((o) => o.value === raw)?.label ?? raw;
      return `${step.question}\n${label}`;
    }
    if (step.type === "website") {
      const hasSite = answers.websiteHas === "yes" ? "Ja" : "Nein";
      const url = answers.websiteUrl?.trim();
      return `${step.question}\n${hasSite}${url ? `\nURL: ${url}` : ""}`;
    }
    return `${step.question}\n${raw}`;
  });

  const notes = answers.notes?.trim();
  if (notes) {
    lines.push(`Noch etwas für uns?\n${notes}`);
  }

  return lines.join("\n\n");
}
