/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import ModeNightSharpIcon from "@mui/icons-material/ModeNightSharp";
import darkAndLightMode from "./DarkAndLightMode";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const theme = useContext(darkAndLightMode);
  console.log(theme, "theme");

  const handleLightMode = () => {
    setToggle(!toggle);
  };

  const handleDarkMode = () => {
    setToggle(!toggle);
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                defaultChecked={defaultDark}
              />
              <div className="slider round"></div>
            </label>
            <span>🌒</span>
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {!toggle ? (
                  <WbSunnySharpIcon
                    onClick={() => {
                      handleLightMode();
                    }}
                  />
                ) : (
                  <ModeNightSharpIcon
                    onClick={() => {
                      handleDarkMode();
                    }}
                  />
                )}
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}
