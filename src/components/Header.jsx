import { Wrapper } from "../wrappers/Header";
import Countdown from "./Countdown";

const Header = ({ seconds, minutes, days, hours }) => {
  return (
    <Wrapper>
      <p className="heading">We're launching soon</p>
      <Countdown
        seconds={seconds}
        minutes={minutes}
        days={days}
        hours={hours}
      />
    </Wrapper>
  );
};
export default Header;
