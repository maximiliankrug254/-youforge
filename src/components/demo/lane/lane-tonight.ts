const WEEKDAYS = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
] as const;

export type LaneTonight = {
  open: boolean;
  line: string;
  hint: string;
};

function remainingSeats(d: Date) {
  const key = d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate();
  return 2 + (key % 4);
}

function nextOpenDay(from: Date) {
  const d = new Date(from);
  for (let i = 0; i < 8; i++) {
    if (i > 0) d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day === 0 || (day >= 3 && day <= 6)) {
      if (i === 0) continue;
      return d;
    }
  }
  return d;
}

function inService(day: number, mins: number) {
  if (day >= 4 && day <= 6 && mins < 60) return true;
  if (day >= 3 && day <= 6) return mins >= 18 * 60;
  if (day === 0) return mins < 60 || (mins >= 16 * 60 && mins < 23 * 60);
  return false;
}

function opensLaterToday(day: number, mins: number) {
  if (day >= 3 && day <= 6) return mins < 18 * 60;
  if (day === 0) return mins >= 60 && mins < 16 * 60;
  return false;
}

export function getLaneTonight(now = new Date()): LaneTonight {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const seats = remainingSeats(now);

  if (inService(day, mins)) {
    const walkIn = mins < 21 * 60;
    return {
      open: true,
      line: `Heute noch ${seats} von 12 Plätzen`,
      hint: walkIn
        ? "Ohne Reservierung bis 21 Uhr oft noch möglich"
        : "Heute nur noch mit Reservierung",
    };
  }

  if (opensLaterToday(day, mins)) {
    const from = day === 0 ? "16 Uhr" : "18 Uhr";
    return {
      open: true,
      line: `Heute ab ${from} · noch ${seats} Plätze`,
      hint: "Walk-in bis 21 Uhr",
    };
  }

  const next = nextOpenDay(now);
  const nextDay = next.getDay();
  const from = nextDay === 0 ? "16 Uhr" : "18 Uhr";
  return {
    open: false,
    line: `Nächster Abend: ${WEEKDAYS[nextDay]} ab ${from}`,
    hint: "12 Plätze · bitte reservieren",
  };
}
