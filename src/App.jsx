import { useEffect, useState } from "react";
import "./App.css";

const getTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let timeZone = "AM";
  if (hours > 12) {
    hours -= 12;
    timeZone = "PM";
  }
  const formattedhours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    formattedhours +
    ":" +
    formattedMinutes +
    ":" +
    formattedSeconds +
    "" +
    timeZone
  );
};

function App() {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time !== getTime()) {
        setTime(getTime());
      }
    }, 800);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);
  return <div className="time">{time}</div>;
}

export default App;
