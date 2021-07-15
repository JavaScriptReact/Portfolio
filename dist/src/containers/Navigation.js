import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import png from "../images/Navigation.png";

import MenuIcon from "@material-ui/icons/Menu";

const tabs = [
  { link: "#home", name: "Home" },
  { link: "#about-me", name: "About me" },
  { link: "#projects", name: "Projects" },
  { link: "#technologies", name: "Technologies" },
  { link: "#contacts", name: "Contacts" },
];

function Navigation({ setSideMenu, hash }) {
  const sideMenu = () => {};

  return (
    <>
      <section
        className="navigation"
        style={{ opacity: hash !== "#home" && 0.9 }}
      >
        <div
          className="tabs"
          style={{
            background:
              hash !== "#home" && "linear-gradient(-45deg, blue , red)",
          }}
        >
          <MenuIcon className="menu-icon" onClick={sideMenu} />
          <div>
            {tabs.map((tab) => {
              return (
                <span key={tab.link}>
                  <a
                    href={tab.link}
                    style={{ color: hash === tab.link && "red" }}
                  >
                    {tab.name}
                  </a>
                </span>
              );
            })}
          </div>
        </div>
        {hash === "#homse" && <img src={png} alt="Navigation" />}
      </section>
    </>
  );
}

export default Navigation;
