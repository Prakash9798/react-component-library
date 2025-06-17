import React, { useEffect, useState } from "react";

const CountDownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <h2>
      {format(timeLeft.hours)} hours {format(timeLeft.minutes)} minutes{" "}
      {format(timeLeft.seconds)} seconds left
    </h2>
  );
};

export default CountDownTimer;
