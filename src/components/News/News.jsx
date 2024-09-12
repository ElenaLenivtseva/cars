import React from "react";
import "./News.scss";
import NewsCard from "../NewsCard/NewsCard";
import { useSelector } from "react-redux";
import ArrowBack from "../icons/ArrowBack";

const News = () => {
  const cars = useSelector((store) => store.cars);
  
  return (
    <div className="news">
      <div className="news__header news__header_desktop">
        <h2 className="title news__title">Новости и анонсы</h2>
      </div>
      <div className="news__header news__header_mobile">
        <div className="news__header-top">
          <div className="news__header-arrow"><ArrowBack className="news__header-arrow-svg"/></div>
          <h2 className="title news__title">Новости и анонсы</h2>
        </div>
        <div className="line"></div>
      </div>

      <div className="news__wrap">
        {cars.map((item) => {
          return <NewsCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default News;
