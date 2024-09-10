import React from "react";
import "./Registration.scss";

const Registration = () => {
  return (
    <div className="container register">
      <h2 className="title register__title">Регистрация</h2>
      <div className="register__wrap">
        <div className="register__formContainer">
          <p className="register__fromTitle">
            Для того, чтобы просматривать профиль, необходимо
            зарегистрироваться!
          </p>
          <form className="register__form">
            <div className="register__formLabelWrap register__formLogin">
              <label className="register__formLabel">
                Логин
                <input
                  className="register__formInput"
                  type="text"
                  placeholder="Придумайте логин"
                />
              </label>
              <p className="register__formError"></p>
            </div>
            <div className="register__formLabelWrap register__formEmail">
              <label className="register__formLabel">
                Email
                <input
                  className="register__formInput"
                  type="email"
                  placeholder="Введите адрес электронной почты"
                />
              </label>
              <p className="register__formError"></p>
            </div>
            <div className="register__formLabelWrap register__formPassword">
              <label className="register__formLabel">
                Email
                <input
                  className="register__formInput"
                  type="password"
                  placeholder="Придумайте пароль"
                />
              </label>
              <p className="register__formError">
              Длина пароля должна быть не менее 8 символов
              </p>
            </div>
            <div className="register__formButtonWrap">
            <button className="register__formButton">Зарегистрироваться</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
