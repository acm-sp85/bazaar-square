import React, { useState } from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DropDown from "./DropDown";

function Header() {
  const [dropDownOn, setDropDownOn] = useState(false);

  const exandUserButton = () => {
    setDropDownOn(!dropDownOn);
  };

  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://dcassetcdn.com/design_img/3096767/681086/681086_17136101_3096767_2dbcc4ed_image.png"
        alt=""
      />
      <div className="header__center">
        <input type="text"></input>
        <SearchIcon />
      </div>
      <div className="header__right" onClick={exandUserButton}>
        <PersonOutlineIcon />
        <ExpandMoreIcon />
      </div>
      {dropDownOn ? (
        <div className="dropdown">
          <DropDown />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
