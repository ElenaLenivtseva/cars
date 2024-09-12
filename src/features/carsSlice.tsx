import { createSlice } from "@reduxjs/toolkit";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";

export interface Car {
  id: string;
    title: string;
    descr: string;
    author: string;
    date: string;
    img?: any;
}
const cars: Car[] = [
  {
    id: "1",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    descr:
      "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    author: "Сергей Иванов",
    date: "3 часа назад",
    img: img1,
  },
  {
    id: "2",
    title: "Tesla Roadster получит колеса как в Формуле 1",
    descr:
      "Похоже, Илон Маск решил собрать в новом спорткаре Tesla Roadster все возможные необычные технические решения. Мы уже писали, что этот автомобиль получит опционные ...",
    author: "Сергей Иванов",
    date: "5 часов назад",
    img: img2,
  },
  {
    id: "3",
    title: "Lucid Air сможет заряжаться быстрее всех",
    descr:
      "Компания Lucid Motors раскрыла подробности о зарядке своего электрокара Air. Этот седан сможет заряжаться током с напряжением более 900 вольт, что станет рекордом для современных ...",
    author: "Сергей Иванов",
    date: "19 августа 2020",
    img: img3,
  },
  {
    id: "4",
    title: "Porsche слегка улучшил Taycan",
    descr:
      "Компания Porsche рассказала об электрокаре Taycan 2021 модельного года, который поступит в продажу в сентябре. Машина получила минимальные обновления ...",
    author: "Сергей Иванов",
    date: "19 августа 2020",
    img: img4,
  },
  {
    id: "5",
    title:
      "В Volvo попытались доказать превосходство над Tesla. Получилось не очень",
    descr:
      "Шведская марка Polestar, которая принадлежит концерну Volvo, организовала в США тест электромобилей на запас хода с целью доказать, что их седан Polestar 2 имеет преимущество ... ",
    author: "Сергей Иванов",
    date: "3 часа назад",
    img: img5,
  },
  {
    id: "6",
    title: "Новые аккумуляторы Tesla подойдут самолетам",
    descr:
      "Группа сотрудников канадского исследовательского центра Tesla опубликовала в журнале Nature научную статью о своих успехах в создании литий-металлических аккумуляторов ...",
    author: "Сергей Иванов",
    date: "5 часов назад",
    img: img6,
  },
  {
    id: "7",
    title: "Cadillac Lyriq будет неожиданно дешевым",
    descr:
      "На прошлой неделе концерн General Motors представил серийную версию электрического кроссовера Cadillac Lyriq, который, в сравнении с Tesla Model X, показался нам хорошей машиной ... ",
    author: "Сергей Иванов",
    date: "19 августа 2020",
    img: img7,
  },
  {
    id: "8",
    title: "В Формуле Е новый чемпион",
    descr:
      "Антониу Феликс да Кошта финишировал вторым в четвертой из шести гонок в Берлине, которые завершают очередной сезон Формулы Е  Благодаря этому спортсмен стал недосягаем ...",
    author: "Сергей Иванов",
    date: "19 августа 2020",
    img: img8,
  },
];
export const carsSlice = createSlice({
  name: "cars",
  initialState: cars,
  reducers: {},
});

export default carsSlice.reducer;
