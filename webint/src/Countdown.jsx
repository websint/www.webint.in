import { useState, useEffect } from "react";
const Countdown = () => {
  // 👉 YAHAN YEAR / DATE CHANGE KAR SAKTE HO
  const targetDate = new Date("March 1, 2026 11:11:11").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ finished: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Webint on the way</h1>

      {timeLeft.finished ? (
        <h2>We are live 🎉</h2>
      ) : (
        <div style={styles.timer}>
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: "95vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "5rem",
    marginBottom: "20px",
  },
  timer: {
    display: "flex",
    gap: "20px",
    fontSize: "2rem",
    fontWeight: "bold",
  },
};

export default Countdown;
