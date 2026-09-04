export function getRsDeskStatus(now = new Date()) {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const weekday = day >= 1 && day <= 5;
  const saturday = day === 6;
  const openWeek = weekday && mins >= 8 * 60 && mins < 18 * 60;
  const openSat = saturday && mins >= 8 * 60 && mins < 14 * 60;
  const open = openWeek || openSat;

  if (open) {
    return { open: true, label: saturday ? "Jetzt erreichbar · bis 14 Uhr" : "Jetzt erreichbar · bis 18 Uhr" };
  }
  if (weekday && mins < 8 * 60) {
    return { open: false, label: "Heute wieder ab 8 Uhr" };
  }
  if (weekday && mins >= 18 * 60) {
    return { open: false, label: "Morgen wieder ab 8 Uhr" };
  }
  if (saturday && mins < 8 * 60) {
    return { open: false, label: "Heute ab 8 Uhr" };
  }
  return { open: false, label: "Montag wieder ab 8 Uhr" };
}
