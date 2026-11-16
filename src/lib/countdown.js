// This is midnight at the beginning of the supplied calendar date, not a start time.
export function concertDayTimestamp(date) {
  return new Date(`${date}T00:00:00+01:00`).getTime();
}
export function countdownToDay(now, date) {
  const target = concertDayTimestamp(date);
  const remaining = Math.max(0, target - now);
  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor(remaining / 3600000) % 24,
    minutes: Math.floor(remaining / 60000) % 60,
    seconds: Math.floor(remaining / 1000) % 60,
    phase: now < target ? 'upcoming' : now < target + 86400000 ? 'today' : 'past'
  };
}
