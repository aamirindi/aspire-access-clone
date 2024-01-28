import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Header() {
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <div className="header">
      <nav className="desktop-nav">
        <ul>
          <li>
            <Link
              style={{
                color: selectedLink === "home" ? "red" : "black",
              }}>
              <RouterLink to="/">Home</RouterLink>
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: selectedLink === "recruit-easy" ? "red" : "black",
              }}>
              <RouterLink to="/recruit">Recruit easy</RouterLink>
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: selectedLink === "about" ? "red" : "black",
              }}>
              <RouterLink to="/about">About</RouterLink>
            </Link>
          </li>
          <li>
            <Link
              to="service"
              smooth={true}
              duration={1500}
              style={{
                color: selectedLink === "service" ? "red" : "black",
              }}>
              <RouterLink to="/">Services</RouterLink>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              style={{
                color: selectedLink === "contact" ? "red" : "black",
              }}>
              <RouterLink to="/">Contact</RouterLink>
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: selectedLink === "find-opportunities" ? "red" : "black",
              }}>
              <RouterLink to="/find-opportunities">
                Find Opportunities
              </RouterLink>
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: selectedLink === "more" ? "red" : "black",
              }}>
              <RouterLink to="/">More</RouterLink>
            </Link>
          </li>
        </ul>
        <button onClick={() => scroll.scrollToTop()}>Enquiry</button>
      </nav>
      <Sidebar />
    </div>
  );
}
