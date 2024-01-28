import Note from "../components/Note";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bg from "../assets/about.jpg";

export default function About() {
  return (
    <>
      <Note />
      <Header />
      <div className="about">
        <div className="top">
          <h1>About Us</h1>
          <p>Turning Aspirants to be successful </p>

          <h4>
            We, founded in 2023, came up with a revolutionary idea in order to
            change the traditional methods of creating opportunities as well as
            hiring
          </h4>

          <img src={bg} alt="" />
        </div>
        <div className="bottom">
          <div className="story">
            <h1>Our Story</h1>
            <h6>
              Aspire Access is not just a company; it's a narrative of
              empowerment and transformative journeys. Our story unfolds in the
              backdrop of a world where opportunities seemed tethered to
              geographical and socio-economic constraints. Fueled by a vision to
              break down these barriers, Aspire Access emerged as a beacon of
              change, navigating the realms of education, career opportunities,
              and technological advancements. From its inception, the company
              set forth a mission to redefine the trajectory of individuals'
              lives, offering a platform where every student, irrespective of
              their background, could access quality education, personalized
              career guidance, and seamless job opportunities. As the chapters
              of our story continue to unfold, Aspire Access remains steadfast
              in its commitment to shaping futures, empowering choices, and
              revolutionizing the way individuals connect with their dreams.
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
