import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DropDown from "./DropDown";

function Header({ currentUser, setCurrentUser }) {
  const [dropDownOn, setDropDownOn] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const [error, setError] = useState("");
  const history = useHistory();

  const expandUserButton = () => {
    setDropDownOn(!dropDownOn);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      state: searchBar,
    });
    console.log(searchBar);
  };

  return (
    <>
      {/* <h3 className="page__title">Donate / Borrow / Sell / Trade</h3> */}
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
          <form onSubmit={handleSearch} className="search__form">
            <input
              className="search__form"
              type="text"
              placeholder="Search Item"
              value={searchBar}
              onChange={(e) => setSearchBar(e.target.value)}
            ></input>
          </form>
          <SearchIcon />
        </div>
        <div className="header__right" onClick={expandUserButton}>
          <PersonOutlineIcon />
          {dropDownOn ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        {dropDownOn ? (
          <div className="dropdown">
            <DropDown
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Header;
