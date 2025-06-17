import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div style={styles.container}>
      <div style={styles.clock}>
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const number = i + 1;
          const angle = (number * 30) * (Math.PI / 180); // Convert degree to radians
          const radius = 130;

          const x = 150 + radius * Math.sin(angle); // centerX + r*sin(θ)
          const y = 150 - radius * Math.cos(angle); // centerY - r*cos(θ)

          return (
            <div
              key={number}
              style={{
                position: "absolute",
                top: y - 10,
                left: x - 10,
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {number}
            </div>
          );
        })}

        {/* Clock Hands */}
        <div style={{ ...styles.hand, ...styles.hourHand, transform: `rotate(${hourDeg}deg)` }} />
        <div style={{ ...styles.hand, ...styles.minuteHand, transform: `rotate(${minuteDeg}deg)` }} />
        <div style={{ ...styles.hand, ...styles.secondHand, transform: `rotate(${secondDeg}deg)` }} />
        <div style={styles.centerDot} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  clock: {
    position: "relative",
    height: "300px",
    width: "300px",
    borderRadius: "50%",
    border: "8px solid #333",
    backgroundColor: "#fff",
  },
  hand: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transformOrigin: "bottom center",
  },
  hourHand: {
    height: "70px",
    width: "6px",
    backgroundColor: "#000",
  },
  minuteHand: {
    height: "100px",
    width: "4px",
    backgroundColor: "#666",
  },
  secondHand: {
    height: "120px",
    width: "2px",
    backgroundColor: "red",
  },
  centerDot: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    backgroundColor: "#000",
  },
};

export default AnalogClock;
