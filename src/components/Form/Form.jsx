import React, { useState } from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { sendForm } from "../../features/registerSlice";

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

const loginErrorText = "Длина логина должна быть не менее 5 символов";
const emailErrorText = "Проверьте правильность формата введенного email-адреса";
const passwordErrorText = "Длина пароля должна быть не менее 8 символов";

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [errorsText, setErrorsText] = useState({
    loginError: "",
    emailError: "",
    errorsText: "",
  });
  const [allError, setAllError] = useState({
    login: true,
    email: true,
    password: true,
  });

  

  // есть три случая: когда значение валидно, когда оно не валидно, и когда мы не проверяем его валидность (первоначальный ввод). На это есть три сценария: нет ошибки под полем (кнопка может быть как разблокированной, так и заблокированной - поля долдны быть все валидными, чтобы кнопка была доступна), есть ошибка под полем (кнопка отправки заблокирована), нет ошибки под полем (но кнопка заблокирована, т.к. это первоначальный ввод, поля не могут быть валидны).

  function checkValidate(name, value) {
    function help(key, value) {
      setAllError((prevAllError) => {
        const updatedErrors = { ...prevAllError };
        updatedErrors[key] = value;
        everythingIsValid(updatedErrors);
        return updatedErrors;
      });
    }
    switch (name) {
      case "login":
        if (value.length < 2) {
          help("login", true);
        } else if (value.length > 2 && value.length < 5) {
          setErrorsText({ ...errorsText, loginError: loginErrorText });
        } else {
          setErrorsText({ ...errorsText, loginError: "" });
          help("login", false);
        }
        break;
      case "password":
        if (value.length < 2) {
          help("password", true);
        } else if (value.length > 7) {
          setErrorsText({ ...errorsText, passwordError: "" });
          help("password", false);
        } else {
          setErrorsText({ ...errorsText, passwordError: passwordErrorText });
          help("password", true);
        }
        break;
      case "email":
        if (value.length < 2) {
          help("email", true);
        } else if (isEmailValid(value)) {
          setErrorsText({ ...errorsText, emailError: "" });
          help("email", false);
        } else {
          setErrorsText({ ...errorsText, emailError: emailErrorText });
          help("email", true);
        }
        break;
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

    checkValidate(name, value);
  };

  function everythingIsValid(updated) {
    const { login, email, password } = updated;
    const anyErrorExist = login || email || password;
    setDisabled(anyErrorExist);
  }

  function handleSumbit(e) {
    e.preventDefault();
    dispatch(sendForm(form));
    setForm(initialForm);
  }

  return (
    <div className="form__container">
      <p className="form__title">
        Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
      </p>
      <form className="form" onSubmit={handleSumbit}>
        <div className="form__label-wrap form__login">
          <label className="form__label">
            Логин
            <input
              className={`form__input ${
                errorsText.loginError && "form__input_error"
              }`}
              name="login"
              type="text"
              placeholder="Придумайте логин"
              value={form.login}
              onChange={handleChange}
            />
          </label>
          <p className="form__error">{errorsText.loginError}</p>
        </div>
        <div className="form__label-wrap form__email">
          <label className="form__label">
            Email
            <input
              className={`form__input ${
                errorsText.emailError && "form__input_error"
              }`}
              name="email"
              type="email"
              placeholder="Введите адрес электронной почты"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <p className="form__error">{errorsText.emailError}</p>
        </div>
        <div className="form__label-wrap form__password">
          <label className="form__label">
            Пароль
            <input
              className={`form__input ${
                errorsText.passwordError && "form__input_error"
              }`}
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <p className="form__error">{errorsText.passwordError}</p>
        </div>
        <div className="form__button-wrap">
          <button className="form__button" disabled={disabled}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
