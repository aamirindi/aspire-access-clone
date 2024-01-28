import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div
        className={`sidebar ${
          isSidebarOpen ? "sidebar-open" : "sidebar-close"
        }`}>
        <a href="#" onClick={closeNav} className="closebtn">
          &times;
        </a>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recruit">Recruit easy</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Services</RouterLink>
        <RouterLink to="/">Contact</RouterLink>
        <RouterLink to="/recruit">Find Opportunities</RouterLink>
        <RouterLink to="/recruit">More</RouterLink>
      </div>
      <div id="main" style={{ marginLeft: isSidebarOpen ? "250px" : "0" }}>
        <button className="openbtn" onClick={openNav}>
          &#9776;
        </button>
      </div>
    </>
  );
};

export default Sidebar;
