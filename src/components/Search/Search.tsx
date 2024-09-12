import React from "react";
import './Search.scss'
import SearchSvg from "../icons/SearchSvg";

const Search = () => {
  return (
    <div className="search">
        <form className="search__form">
          <button className="search__button" type="submit">
            <SearchSvg className='search__svg'/>
          </button>
          <input
            className="search__input"
            type="text"
            placeholder="Найдите ваш электромобиль"
          />
        </form>
    </div>
  );
};

export default Search;
