import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="left">
        <h4>Contact Us</h4>
        <h3>Get in touch with us today to see how we can help you succeed.</h3>
        <p>
          Hyderabad, India info. <br />
          aspireaccess@gmail.com
        </p>
        <div className="social">
          <LinkedInIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="right">
        <div className="form">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="email">Email*</label>
          <input type="text" id="email" />
          <label htmlFor="message">Leave us a message...</label>
          <input type="text" id="message" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
