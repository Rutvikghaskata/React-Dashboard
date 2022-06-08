import React from "react";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

function Navbar() {
  const navitage = useNavigate();

  const Signout = () => {
    auth.signOut().then(() => {
      navitage("/login");
    });
  };
  return (
    <div className="navbar">
      <div className="input-container">
        <BsSearch className="search-icon" />
        <input placeholder="Search..." />
      </div>
      <div className="info-container">
        <div className="langauge">
          <p>EN</p>
          <BiChevronDown className="down-arrow-icon" />
        </div>
        <FiBell className="bell-icon" />
        <div className="red-point"></div>
        <div className="image">
          <img
            src="https://www.kindpng.com/picc/m/97-978300_hero-person-eye-glasses-young-man-hd-png.png"
            alt=""
          />
          <div className="bubble">
            <p>Rutvik Ghaskata</p>
            <p onClick={Signout}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
