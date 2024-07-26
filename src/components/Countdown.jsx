import { Wrapper } from "../wrappers/Countdown";
import TimeUnit from "./TimeUnit";

const Countdown = ({ seconds, minutes, days, hours }) => {
  return (
    <Wrapper>
      <TimeUnit value={days} unit="days" />
      <TimeUnit value={hours} unit="hours" />
      <TimeUnit value={minutes} unit="minutes" />
      <TimeUnit value={seconds} unit="seconds" />
    </Wrapper>
  );
};
export default Countdown;
