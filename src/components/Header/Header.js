import React from "react";
import Logo from "../../assets/img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="header_logo" src={Logo} alt="Star Wars Logo" />
      </div>
      <div className="container">
        <div className="header_heading">
          <img className="header_logo" src={Logo} alt="Star Wars Logo" />
          <span >Directory</span>
        </div>
        <div className="header_description">
          Find your favorite Characters, Films, Species, Starships and Planets
        </div>
        <form onSubmit={() => alert('Search')} className="search">
          <button className='search_btn' type="submit"><i class="fa fa-search"></i></button>
          <input className="search_input" type="search" placeholder="Enter your search term" />
        </form>
      </div>
    </div>
  );
};

export default Header;
