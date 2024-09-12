import React from "react";
import './NewsCard.scss'
import { Car } from "../../features/carsSlice";

interface NewsCardProps {
  item: Car
}

const NewsCard: React.FC<NewsCardProps> = ({item}) => {
  return (
    <div className="news-card">
      <div className="news-card__top">
        <div className="news-card__img-wrap">
          <img className="news-card__img" src={item.img} alt={item.title} />
          <div className="news-card__img-gradient"></div>
        </div>
      </div>
      <div className="news-card__bottom">
      <h4 className="news-card__title">
          {item.title}
        </h4>
        <p className="news-card__descr">{item.descr}</p>
        <div className="news-card__footer">
          <p className="news-card__info news-card__author">{item.author}</p>
          <p className="news-card__info news-card__date">{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
