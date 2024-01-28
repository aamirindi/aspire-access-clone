import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Note from "./components/Note";
import Middle from "./components/Middle";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Recruit from "./components/Recruit";
import "./App.css";
import About from "./components/About";
import FindOpportunities from "./components/FindOpportunities";

const App = () => {
  return (
    <div className="app">
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Note />
                <Header />
                <Middle />
                <Feature />
                <Service />
                <Contact />
                <Map />
                <Footer />
              </>
            }
          />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-opportunities" element={<FindOpportunities />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
