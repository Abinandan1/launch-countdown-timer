import { FaFacebookSquare, FaInstagram, FaPinterest } from "react-icons/fa";
import { Wrapper } from "../wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="social-icons">
        <button className="icon">
          <FaFacebookSquare />
        </button>
        <button className="icon">
          <FaPinterest />
        </button>
        <button className="icon">
          <FaInstagram />
        </button>
      </div>
    </Wrapper>
  );
};
export default Footer;
