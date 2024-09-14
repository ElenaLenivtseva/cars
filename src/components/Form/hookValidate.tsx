import React, { useState } from "react";
import { validateEmail, validateLogin, validatePassword } from "../../utils/validatefunctions";

export type Keys = 'login' | 'email' | 'password';

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


const useValidateForm = () => {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);

  const [errorsText, setErrorsText] = useState(initialErrorsText);
  const [allErrors, setAllErrors] = useState(initialErrors);

  function manageButton(key: Keys, value: boolean) {
    setAllErrors((prevAllErrors) => {
      const updatedErrors = { ...prevAllErrors };
      updatedErrors[key] = value;
      setDisabled(!checkEverythingIsValid(updatedErrors));
      return updatedErrors;
    });
  }

 
  function checkEverythingIsValid(updated: errors) {
    return !(updated.login || updated.email || updated.password);
  }

  function validateForm(name: Keys, value:string) {
    if (value.length < 2) {
      manageButton(name, true);
      return;
    }
    switch (name) {
      case "login":
        validateLogin(errorsText, name, value,setErrorsText,manageButton)
        break;
      case "password":
        validatePassword(errorsText, name, value,setErrorsText,manageButton)
        break;
      case "email":
        validateEmail(errorsText, name, value,setErrorsText,manageButton)
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

