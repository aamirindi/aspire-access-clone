import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Recruit() {
  return (
    <>
      <Note />
      <Header />
      <div className="recruit">
        <div className="head">
          <h1>We Are Coming Soon</h1>
          <p>Sign up to be the first to know when we go live.</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Enter your email here*" />
          <button>Notify Me</button>
        </div>
        <div className="link">
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
      </div>
      <Footer />
    </>
  );
}
