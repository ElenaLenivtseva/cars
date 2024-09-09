import React from "react";
import './NewsCard.scss'

const NewsCard = ({item}) => {
  return (
    <div className="newsCard">
      <div className="newsCard__top">
        <div className="newsCard__imgWrap">
          <img className="newsCard__img" src={item.img} alt={item.title} />
          <div className="newsCard__imgGradient"></div>
        </div>
      </div>
      <div className="newsCard__bottom">
      <h4 className="newsCard__title">
          {item.title}
        </h4>
        <p className="newsCard__descr">{item.descr}</p>
        <div className="newsCard__footer">
          <p className="newsCard__info newsCard__author">{item.author}</p>
          <p className="newsCard__info newsCard__date">3 часа назад</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
