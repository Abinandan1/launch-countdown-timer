import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let s = 60;
    let m = 59;
    let h = 23;
    let d = 13;
    setTimeout(() => {
      setMinutes(m);
      setHours(h);
      setDays(d);
    }, 1000);
    setInterval(() => {
      if (s === 0) s = 60;
      setSeconds(--s);
    }, 1000);
    setInterval(() => {
      if (m === 0) m = 59;
      setMinutes(--m);
    }, 60000);
    setInterval(() => {
      if (h === 0) h = 23;
      setHours(--h);
    }, 60000 * 60);
    setInterval(() => {
      if (d === 0) d = 13;
      setDays(--d);
    }, 60000 * 60 * 24);
  }, []);
  return (
    <main>
      <Header seconds={seconds} minutes={minutes} hours={hours} days={days} />
      <Footer />
    </main>
  );
}

export default App;
