import React from "react";
import "./Registration.scss";
import Form from "../Form/Form";

const Registration = () => {
  return (
    <div className="container register">
      <h2 className="title register__title">Регистрация</h2>
      <div className="register__wrap">
        <Form/>
      </div>
    </div>
  );
};

export default Registration;
