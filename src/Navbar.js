import React, { useState } from "react";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import ModeNightSharpIcon from "@mui/icons-material/ModeNightSharp";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLightMode = () => {
    setToggle(!toggle);
  };

  const handleDarkMode = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          </div>
        </div>
      </nav>
    </>
  );
}
