import React, { useState } from "react";
import "./Form.scss";

const initialForm = {
  login: "",
  email: "",
  password: "",
};

function isEmailValid(value) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(value);
}

const Form = () => {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [loginError, setLoginError] = useState("ллл");
  const [emailError, setEmailError] = useState("прпоп");
  const [passwordError, setPasswordError] = useState("прарпа");

  function checkValidate(name, value) {
    switch (name) {
      case "login":
        if (value.length > 4) {
          setLoginError(false);
          return true;
        } else {
          setLoginError("Длина логина должна быть не менее 5 символов");
          return false;
        }

      case "password":
        if (value.length > 6) {
          setPasswordError(false);
          return true;
        } else {
          setPasswordError("Длина пароля должна быть не менее 8 символов");
          return false;
        }

      case "email":
        if (isEmailValid(value)) {
          setEmailError("");
          return true;
        } else {
          setEmailError(
            "Проверьте правильность формата введенного email-адреса"
          );
          return false;
        }

      default:
        alert("Нет таких значений");
    }
  }
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    
    if (value.length > 1) {
      checkValidate(name, value);
      everythingIsValid()
    }
    
    
  };
  function everythingIsValid() {
    let anyErrorExist = loginError || emailError || passwordError;
    console.log(anyErrorExist);
    if(loginError || emailError || passwordError){
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }
  

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
              name="login"
              type="text"
              placeholder="Придумайте логин"
              value={form.login}
              onChange={(e) => {
                handleChange(e);
                
              }}
            />
          </label>
          <p className="form__error">{loginError}</p>
        </div>
        <div className="form__labelWrap form__email">
          <label className="form__label">
            Email
            <input
              className="form__input"
              name="email"
              type="email"
              placeholder="Введите адрес электронной почты"
              value={form.email}
              onChange={(e) => {
                handleChange(e);
                
              }}
            />
          </label>
          <p className="form__error">{emailError}</p>
        </div>
        <div className="form__labelWrap form__password">
          <label className="form__label">
            Пароль
            <input
              className="form__input"
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              value={form.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <p className="form__error">{passwordError}</p>
        </div>
        <div className="form__buttonWrap">
          <button className="form__button" disabled={disabled}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
