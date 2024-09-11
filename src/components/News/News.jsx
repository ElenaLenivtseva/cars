import React from "react";
import "./News.scss";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";
import img8 from "../../images/8.png";
import NewsCard from "../NewsCard/NewsCard";
import { arrowBack } from "../../icons/icons";

const cars = [
  {
    id: "1",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img1,
  },
  {
    id: "2",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img2,
  },
  {
    id: "3",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img3,
  },
  {
    id: "4",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img4,
  },
  {
    id: "5",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img5,
  },
  {
    id: "6",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img6,
  },
  {
    id: "7",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img7,
  },
  {
    id: "8",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "2019-07-04T13:33:03.969Z",
    img: img8,
  },
];
const News = () => {
  return (
    <div className="news">
      <div className="news__header news__header_desktop">
        <h2 className="title news__title">Новости и анонсы</h2>
      </div>
      <div className="news__header news__header_mobile">
        <div className="news__headerTop">
          <div className="news__headerArrow">{arrowBack}</div>
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
