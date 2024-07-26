import { Wrapper } from "../wrappers/TimeUnit";

const TimeUnit = ({ value, unit }) => {
  const length = value.toString().length;
  return (
    <Wrapper>
      <div className="card">{length === 1 ? `0${value}` : value}</div>
      <p>{unit}</p>
    </Wrapper>
  );
};
export default TimeUnit;
