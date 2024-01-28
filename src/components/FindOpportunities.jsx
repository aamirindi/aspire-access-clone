import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

export default function FindOpportunities() {
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
      </div>
      <Footer />
    </>
  );
}
