import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import AccountSvg from "../icons/AccountSvg";
import ChargeSvg from "../icons/ChargeSvg";
import LawSvg from "../icons/LawSvg";
import MenuSvg from "../icons/MenuSvg";
import SearchSvg from "../icons/SearchSvg";

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
          <div className="header__item header__item-icons">
            <HeaderIcon link="/register">
              <AccountSvg className="header-icon__svg" />
            </HeaderIcon>
            <HeaderIcon link="/">
              <ChargeSvg className="header-icon__svg" />
            </HeaderIcon>
            <HeaderIcon link="/">
              <LawSvg className="header-icon__svg" />
            </HeaderIcon>
            <HeaderIcon link="/">
              <MenuSvg className="header-icon__svg" />
            </HeaderIcon>
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
          <div className="header__item header__item-icons">
            <HeaderIcon link="/"><SearchSvg className="header-icon__svg" /></HeaderIcon>
            <HeaderIcon link="/"><LawSvg className="header-icon__svg" /></HeaderIcon>
            <HeaderIcon link="/"><MenuSvg className="header-icon__svg" /></HeaderIcon>
          </div>
        </div>
        <div className="line"></div>
      </header>
    </>
  );
};

export default Header;
