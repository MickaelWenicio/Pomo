import { useState, useEffect } from 'react';
import Container from './Style';

interface TimerProps {
  minutes: number;
}

const Timer = ({ minutes }: TimerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(minutes);
  const [stopped, setStopped] = useState(false);

  const updateCounting = () => {
    if (totalMinutes === 0 && seconds === 0) {
      setStopped(true);
      return;
    }

    if (seconds === 0) {
      if (totalMinutes > 0) {
        setSeconds(59);
        setTotalMinutes((prevMinutes) => prevMinutes - 1);
      }
      return;
    }

    setSeconds((prevSeconds) => prevSeconds - 1);
  };

  useEffect(() => {
    if (stopped) return;
    const intervalId = setInterval(updateCounting, 1000);
    return () => clearInterval(intervalId);
  }, [seconds, totalMinutes, stopped]);

  const formatDate = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <Container>
      <div>
        <h1>
          {formatDate(totalMinutes)}:{formatDate(seconds)}
        </h1>
      </div>
    </Container>
  );
};

export default Timer;
