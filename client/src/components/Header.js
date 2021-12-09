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
  const [searchBar, setSearchBar] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const exandUserButton = () => {
    setDropDownOn(!dropDownOn);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchBar);

    const searchItem = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`/items/find/${searchBar}`, searchItem)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // DO BETTER ERROR HANDLING
          console.log("ERROORRRR");
        }
      })
      .then((result) => {
        setSearchResults(result);

        history.push({
          pathname: "/search",
          state: { searchResults: searchResults },
        });
      });
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
        <form onSubmit={handleSearch} className="search__form">
          <input
            type="text"
            placeholder="Search Item"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
          ></input>
        </form>
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
