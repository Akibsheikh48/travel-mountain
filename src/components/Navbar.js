import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes} from "react-icons/fa";
import { GiMountaintop } from "react-icons/gi";

import { IconContext } from "react-icons/lib";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closemobileMenu = () => setClick(false);

  const showButon = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButon();
  }, []);

  window.addEventListener("resize", showButon);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar_container container">
          <div className="navbar_logo" onClick={closemobileMenu}>
         
            <GiMountaintop/>           
          </div>
          <div className="menu_icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav_menu active" : "nav_menu"}>
            <li className="nav_item">
              <div className="nav_links" onClick={closemobileMenu}>
                01.HISTORY
              </div>
            </li>
            <li className="nav_item">
              <div className="nav_links" onClick={closemobileMenu}>
                02.TEAM
              </div>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
