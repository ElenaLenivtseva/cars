import React, { useState } from "react";

type keys = 'login' | 'email' | 'password';
interface errors {
  login: boolean,
  email: boolean,
  password: boolean,
}

const initialForm = {
  login: "",
  email: "",
  password: "",
};

const initialErrors: errors = {
  login: true,
  email: true,
  password: true,
};

const initialErrorsText = {
  loginError: "",
  emailError: "",
  passwordError: "",
};

const loginErrorText = "Длина логина должна быть не менее 5 символов";
const emailErrorText = "Проверьте правильность формата введенного email-адреса";
const passwordErrorText = "Длина пароля должна быть не менее 8 символов";

function isEmailValid(value: string) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(value);
}

const useValidateForm = () => {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);

  // Два состояния, потому что они несинхронны. Текста ошибки может не быть, но сама по себе ошибка может существовать - первоначальный невалидируемый ввод
  const [errorsText, setErrorsText] = useState(initialErrorsText);
  // изначально все ошибки в состоянии true, т.к. поля пустые
  const [allErrors, setAllErrors] = useState(initialErrors);

  function validateForm(name: keys, value: string) {
    function manageButton(key: keys, value: boolean) {
      setAllErrors((prevAllErrors) => {
        const updatedErrors = { ...prevAllErrors };
        updatedErrors[key] = value;
        const everythingIsValid = checkEverythingIsValid(updatedErrors);
        // если все валидно, разблокируем кнопку
        setDisabled(!everythingIsValid);
        return updatedErrors;
      });
    }

    function checkEverythingIsValid(updated:errors) {
      const { login, email, password } = updated;
      const anyErrorExist = login || email || password;
      // если есть ошибка, значит не все валидно, возвращаем false
      return !anyErrorExist;
    }

    let login = "";
    let email = "";
    let password = "";
    let manageButtonVal:boolean = false;

    // первоначальный ввод
    if (value.length < 2) {
      manageButtonVal = true;
      manageButton(name, manageButtonVal);
      return;
    }

    switch (name) {
      case "login":
        if (value.length < 5) {
          login = loginErrorText;
          manageButtonVal = true;
        }
        break;
      case "password":
        if (value.length < 8) {
          password = passwordErrorText;
          manageButtonVal = true;
        }
        break;
      case "email":
        if (!isEmailValid(value)) {
          email = emailErrorText;
          manageButtonVal = true;
        }
        break;
      default:
        alert("Нет таких значений");
    }
    setErrorsText({
      ...errorsText,
      loginError: login,
      emailError: email,
      passwordError: password,
    });
    manageButton(name, manageButtonVal);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === 'login'||name === 'password'||name === 'email'){
      validateForm(name, value);
    }
  };
  const clean = () => {
    setForm(initialForm);
    setAllErrors(initialErrors);
    setErrorsText(initialErrorsText);
    setDisabled(true);
  };
  return {
    form,
    disabled,
    errorsText,
    handleChange,
    clean,
  };
};

export default useValidateForm;
