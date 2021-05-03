import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { handleFilter } from "../../Redux/actions/GeneralAction";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch()
  const filterTerm = useSelector(state => state.GeneralReducer.filterTerm)

  const handleChange = (e) => {
    dispatch(handleFilter(e.target.value))
  }

  return (
    <div className="header">
      <div className="logo">
        <NavLink to='/'>
        <img className="header_logo" src={Logo} alt="Star Wars Logo" />
        </NavLink>
      </div>
      <div className="container">
        <div className="header_heading">
          <img className="header_logo" src={Logo} alt="Star Wars Logo" />
          <span >Directory</span>
        </div>
        <div className="header_description">
          Find your favorite Characters, Films, Species, Starships and Planets
        </div>
        <form onSubmit={e => e.preventDefault()} className="search">
          <button className='search_btn' type="submit"><i class="fa fa-search"></i></button>
          <input onChange={handleChange} value={filterTerm} className="search_input" type="search" placeholder="Enter your search term" />
        </form>
      </div>
    </div>
  );
};

export default Header;
