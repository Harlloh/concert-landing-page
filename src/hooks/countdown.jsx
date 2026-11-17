import { useEffect, useState } from 'react';
import { currentEvent, concertDateLabel } from '../data/event';
import { countdownToDay } from '../lib/countdown';
export default function Countdown() {
  const [clock, setClock] = useState(() => countdownToDay(Date.now(), currentEvent.date));
  useEffect(() => {
    const update = () => setClock(countdownToDay(Date.now(), currentEvent.date));
    update();
    const timer = setInterval(update, 1000);
    document.addEventListener('visibilitychange', update);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  const units = [['days', 'Days'], ['hours', 'Hours'], ['minutes', 'Minutes'], ['seconds', 'Seconds']];
  return <div className="event-countdown" aria-label="Countdown to concert day in Lagos time">
    <div className="countdown-caption">
      <span>{clock.phase === 'upcoming' ? 'Until concert day' : clock.phase === 'today' ? 'Today is concert day' : 'The concert date has passed'}</span>
      <small>{concertDateLabel()} / Lagos time</small>
    </div>
    <div className="countdown-values" role="timer" aria-live="off">{units.map(([key, label]) => <div className="countdown-unit" key={key}>
        <strong>{String(clock[key]).padStart(2, '0')}</strong>
        <span>{label}</span>
      </div>)}</div>
  </div>;
}
