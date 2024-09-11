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

const Form = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [allError, setAllError] = useState({
    login: true,
    email: true,
    password: true,
  });
  // const [errors, setErrors] = useState({
  //   login: "",
  //   email: "",
  //   password: "",
  // });
  
  function checkValidate(name, value) {
    
    switch (name) {
      case "login":
        if (value.length < 2) {
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.login = true
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          
        } else if (value.length > 2 &&value.length < 5){
          setLoginError("Длина логина должна быть не менее 5 символов");
          
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.login = true
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          return false;
        } else if (value.length>4){
          setLoginError("");
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.login = false
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          return true;
        } 
        break;
      case "password":
        if (value.length < 2) {
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.password = true;
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
    
        } else if (value.length > 7) {
          setPasswordError("");
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.password = false
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          return true;
        } else {
          setPasswordError("Длина пароля должна быть не менее 8 символов");
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.password = true
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          return false;
        }
        break;
      case "email":
        if (value.length < 2) {
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.email = true
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
        } else if (isEmailValid(value)) {
          setEmailError("");
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.email = false
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          return true;
        } else {
          setEmailError(
            "Проверьте правильность формата введенного email-адреса"
          );
          setAllError(prevAllError => {
            const updatedErrors = { ...prevAllError };
            updatedErrors.email = true
            everythingIsValid(updatedErrors); 
            return updatedErrors;
          });
          return false;
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
    if(anyErrorExist){
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }
  function handleSumbit(e){
    e.preventDefault()
    dispatch(sendForm(form))
    setForm(initialForm)
  }
  
  
  return (
    <div className="form__container">
      <p className="form__title">
        Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
      </p>
      <form className="form" onSubmit={handleSumbit}>
        <div className="form__labelWrap form__login">
          <label className="form__label">
            Логин
            <input
              className={`form__input ${loginError&&'form__input_error'}`}
              
              name="login"
              type="text"
              placeholder="Придумайте логин"
              value={form.login}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <p className='form__error'>{loginError}</p>
         
        </div>
        <div className="form__labelWrap form__email">
          <label className="form__label">
            Email
            <input
              className={`form__input ${emailError&&'form__input_error'}`}
             
              name="email"
              type="email"
              placeholder="Введите адрес электронной почты"
              value={form.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
         
          <p className='form__error'>{emailError}</p>
        </div>
        <div className="form__labelWrap form__password">
          <label className="form__label">
            Пароль
            <input
              className={`form__input ${passwordError&&'form__input_error'}`}
             
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              value={form.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <p className='form__error'>{passwordError}</p>
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
