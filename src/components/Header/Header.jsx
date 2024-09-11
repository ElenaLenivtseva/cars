import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import { law, search, charge, account, menu } from "../../icons/icons";

const Header = () => {
  return (
    <>
      <header className="container header header_desktop">
        <div className="header__wrap">
          <div className="header__item">
            <Link to="/">
              <h1 className="header__logo">Logo</h1>
            </Link>
          </div>
          <div className="header__item">
            <Search />
          </div>
          <div className="header__item header__item_void"></div>
          <div className="header__item header__itemIcons">
            <HeaderIcon link="/register">{account}</HeaderIcon>
            <HeaderIcon link="/">{charge}</HeaderIcon>
            <HeaderIcon link="/">{law}</HeaderIcon>
            <HeaderIcon link="/">{menu}</HeaderIcon>
          </div>
        </div>
        <div className="line"></div>
      </header>
      <header className="container header header_tablet">
        <div className="header__wrap">
          <div className="header__item">
            <Link to="/">
              <h1 className="header__logo">Logo</h1>
            </Link>
          </div>
          <div className="header__item">
            <Search />
          </div>
          <div className="header__item header__item_void"></div>
          <div className="header__item header__itemIcons">
            <HeaderIcon link="/">{search}</HeaderIcon>
            <HeaderIcon link="/">{law}</HeaderIcon>
            <HeaderIcon link="/">{menu}</HeaderIcon>
          </div>
        </div>
        <div className="line"></div>
      </header>
    </>
  );
};

export default Header;
