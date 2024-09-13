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

 
  function checkEverythingIsValid(updated: errors) {
    const { login, email, password } = updated;
    const anyErrorExist = login || email || password;
    // если есть ошибка, значит не все валидно, возвращаем false
    return !anyErrorExist;
  }

  function validateForm(name: keys, value:string) {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if(name==='login'||name==='email'||name==='password'){
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

