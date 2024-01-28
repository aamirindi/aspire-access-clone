import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LanguageIcon from "@mui/icons-material/Language";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export default function Feature() {
  return (
    <div className="feature">
      <div className="container">
        <p>
          <SentimentSatisfiedIcon fontSize="large" />
        </p>
        <span>Eco-Friendly Design</span>
      </div>
      <div className="container">
        <p>
          <StarBorderIcon fontSize="large" />
        </p>
        <span>24/7 Support</span>
      </div>
      <div className="container">
        <p>
          <LanguageIcon fontSize="large" />
        </p>
        <span>
          Multilingual <br />
          Functionality
        </span>
      </div>
      <div className="container">
        <p>
          <ElectricBoltIcon fontSize="large" />
        </p>
        <span>Advanced Tech</span>
      </div>
    </div>
  );
}
