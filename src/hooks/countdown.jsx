import { useRef, useState, useEffect } from "react";

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("December 27 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHour(hours);
        setMin(min);
        setSec(sec);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="countdown">
      {/* <h3 className="countdown-h3"> */}
      Asher Praise Concert is Today!
      {/* <h3>{days}days</h3>
      <h3>{hour}hours</h3>
      <h3>{min}min</h3>
      <h3>{sec}sec</h3> */}
      {/* </h3> */}
    </div>
  );
}
