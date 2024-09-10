import React from "react";
import './Form.scss'

const Form = () => {
  return (
    <div className="form__container">
      <p className="form__title">
        Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
      </p>
      <form className="form">
        <div className="form__labelWrap form__login">
          <label className="form__label">
            Логин
            <input
              className="form__input"
              type="text"
              placeholder="Придумайте логин"
            />
          </label>
          <p className="form__error"></p>
        </div>
        <div className="form__labelWrap form__email">
          <label className="form__label">
            Email
            <input
              className="form__input"
              type="email"
              placeholder="Введите адрес электронной почты"
            />
          </label>
          <p className="form__error"></p>
        </div>
        <div className="form__labelWrap form__password">
          <label className="form__label">
            Email
            <input
              className="form__input"
              type="password"
              placeholder="Придумайте пароль"
            />
          </label>
          <p className="form__error">
            Длина пароля должна быть не менее 8 символов
          </p>
        </div>
        <div className="form__buttonWrap">
          <button className="form__button">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
