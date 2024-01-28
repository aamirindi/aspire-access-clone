import wav from "../assets/bg.webp";
import { Link } from "react-scroll";

export default function Middle() {
  return (
    <div className="middle">
      <img src={wav} alt="" />
      <h1>ASPIRE ACCESS...</h1>
      <p>Redefining success by empowering young minds</p>
      <div className="learn">
        <Link to="service" smooth={true} duration={1500}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
}
