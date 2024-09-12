import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendForm } from "../../features/registerSlice";
import "./Form.scss";
import Input from "../Input/Input";
import Label from "../Label/Label";
import useValidateForm from "./hookValidate";
import { AppDispatch } from "../../features/store";


const Form = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    form,
    disabled,
    errorsText,
    handleChange,
    clean
  } = useValidateForm()
  

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(sendForm(form));
    clean()
  }

  return (
    <div className="form__container">
      <p className="form__title">
        Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
      </p>
      <form className="form" onSubmit={handleSumbit}>
        <Label
          title="Логин"
          error={errorsText.loginError}
          className="form__login"
        >
          <Input
            name="login"
            type="text"
            error={errorsText.loginError}
            placeholder="Придумайте логин"
            value={form.login}
            handleChange={handleChange}
          />
        </Label>
        <Label
          title="Email"
          error={errorsText.emailError}
          className="form__email"
        >
          <Input
            error={errorsText.emailError}
            name="email"
            type="email"
            placeholder="Введите адрес электронной почты"
            value={form.email}
            handleChange={handleChange}
          />
        </Label>
        <Label
          title="Пароль"
          error={errorsText.passwordError}
          className="form__password"
        >
          <Input
            error={errorsText.passwordError}
            name="password"
            type="password"
            placeholder="Придумайте пароль"
            value={form.password}
            handleChange={handleChange}
          />
        </Label>
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
