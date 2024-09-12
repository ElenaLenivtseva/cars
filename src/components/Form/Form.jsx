import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendForm } from "../../features/registerSlice";
import "./Form.scss";

const initialForm = {
  login: "",
  email: "",
  password: "",
};

const initialErrors = {
  login: true,
  email: true,
  password: true,
};
const initialErrorsText = {
  loginError: "",
  emailError: "",
  errorsText: "",
};

const loginErrorText = "Длина логина должна быть не менее 5 символов";
const emailErrorText = "Проверьте правильность формата введенного email-адреса";
const passwordErrorText = "Длина пароля должна быть не менее 8 символов";

function isEmailValid(value) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(value);
}

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);

  // Два состояния, потому что они несинхронны. Текста ошибки может не быть, но сама по себе ошибка может существовать - первоначальный невалидируемый ввод
  const [errorsText, setErrorsText] = useState(initialErrorsText);
  // изначально все ошибки в состоянии true, т.к. поля пустые
  const [allErrors, setAllErrors] = useState(initialErrors);

  // Есть три случая:
  // 1) значение валидно
  // 2) значение невалидно
  // 3) значение не проверяется на валидность (первоначальный ввод)

  // На них есть три сценария:
  // 1) Ошибка под полем +; Кнопка +-.
  // Нет ошибки под полем (кнопка может быть как разблокированной, так и заблокированной - поля должны быть все валидными, чтобы кнопка была доступна)
  // 2) Ошибка под полем +; Кнопка-;
  // Есть ошибка под полем (кнопка отправки заблокирована, даже если только одно поле невалидно)
  // 3) Ошибка под полем -; Кнопка -;
  // Нет ошибки под полем (но кнопка заблокирована, т.к. это первоначальный ввод, поля не могут быть валидны)

  function validateForm(name, value) {
    // вспомогательная функция, недоступная извне - может использоваться только здесь
    function manageButton(key, value) {
      setAllErrors((prevAllErrors) => {
        const updatedErrors = { ...prevAllErrors };
        updatedErrors[key] = value;
        const everythingIsValid = checkEverythingIsValid(updatedErrors);
        // если все валидно, разблокируем кнопку
        setDisabled(!everythingIsValid);
        return updatedErrors;
      });
    }

    // вспомогательная функция, недоступная извне - может использоваться только здесь
    function checkEverythingIsValid(updated) {
      const { login, email, password } = updated;
      const anyErrorExist = login || email || password;
      // если есть ошибка, значит не все валидно, возвращаем false
      return !anyErrorExist;
    }

    // первоначальный ввод - работаем только с кнопкой. Не отображаем ошибку под полем
    if (value.length < 2) {
      manageButton(name, true);
      return;
    }
    // непервоначальный ввод - работаем с кнопкой и ошибкой под полями
    switch (name) {
      case "login":
        // поле валидно
        if (value.length > 4) {
          // убрать ошибку под полем
          setErrorsText({ ...errorsText, loginError: "" });
          // на основе изменений поменять состояние кнопки отправки
          manageButton(name, false);
          // поле невалидно
        } else {
          // показать ошибку под полем
          setErrorsText({ ...errorsText, loginError: loginErrorText });
          // на основе изменений поменять состояние кнопки отправки
          manageButton(name, true);
        }
        break;
      case "password":
        if (value.length > 7) {
          setErrorsText({ ...errorsText, passwordError: "" });
          manageButton(name, false);
        } else {
          setErrorsText({ ...errorsText, passwordError: passwordErrorText });
          manageButton(name, true);
        }
        break;
      case "email":
        if (isEmailValid(value)) {
          setErrorsText({ ...errorsText, emailError: "" });
          manageButton(name, false);
        } else {
          setErrorsText({ ...errorsText, emailError: emailErrorText });
          manageButton(name, true);
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

    validateForm(name, value);
  };

  function handleSumbit(e) {
    e.preventDefault();
    dispatch(sendForm(form));
    // возвращаем форму в нчальное состояние
    setForm(initialForm);
    setAllErrors(initialErrors);
    setErrorsText(initialErrorsText);
    setDisabled(true);
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
