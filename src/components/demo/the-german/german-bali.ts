const BALI_TZ = "Asia/Makassar";

export function baliClock(date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: BALI_TZ,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );

  const hour = Number(parts.hour);
  const minute = Number(parts.minute);
  const weekday = parts.weekday ?? "";
  const open =
    weekday !== "Sun" && hour * 60 + minute >= 9 * 60 && hour * 60 + minute < 18 * 60;

  return {
    time: `${parts.hour}:${parts.minute}`,
    weekday,
    open,
  };
}
