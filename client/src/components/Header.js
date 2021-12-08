import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DropDown from "./DropDown";

function Header({ currentUser }) {
  const [dropDownOn, setDropDownOn] = useState(false);
  const history = useHistory();
  const exandUserButton = () => {
    setDropDownOn(!dropDownOn);
  };

  return (
    <div className="header">
      <img
        className="header__icon"
        onClick={() => {
          history.push("/");
        }}
        src="https://dcassetcdn.com/design_img/3096767/681086/681086_17136101_3096767_2dbcc4ed_image.png"
        alt=""
      />
      <div className="header__center">
        <input type="text" placeholder="Search Item"></input>
        <SearchIcon />
      </div>
      <div className="header__right" onClick={exandUserButton}>
        <PersonOutlineIcon />
        {dropDownOn ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {dropDownOn ? (
        <div className="dropdown">
          <DropDown currentUser={currentUser} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
