import React from "react";
import './Search.scss'
import { searchForm } from "../../icons/icons";

const Search = () => {
  return (
    <div className="search">
        <form className="search__form">
          <button className="search__button" type="submit">
            {searchForm}
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
