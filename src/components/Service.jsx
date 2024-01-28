import left from "../assets/left.png";
import mid from "../assets/mid.png";
import right from "../assets/right.png";

export default function Service() {
  return (
    <section id="service" className="service">
      <div className="header">
        <p>Our Services</p>
        <h1>Your Ambitions-Our Commitment</h1>
      </div>
      <div className="content">
        <div className="left">
          <img src={left} alt="" />
          <h5>Career guidance and awareness </h5>
          <p>we provide the career guidance right from schooling </p>
        </div>
        <div className="mid">
          <img src={mid} alt="" />
          <h5>Create Opportunities</h5>
          <p>
            while others focus on creating wealth and other activities, we are
            here to create the career opportunities to the freshers especially
            from Tier 3 institutions
          </p>
        </div>

        <div className="right">
          <img src={right} alt="" />
          <h5>Make Recruitment flexible</h5>
          <p>
            We help out companies to reduce the burden of recruitment when
            needed by supplying worthy candidates through our smart portal which
            is capable of mapping worthy candidature for your provided job speci
          </p>
        </div>
      </div>
    </section>
  );
}
