import React from "react";

const Input = ({error, name, type, placeholder, value, handleChange}) => {
  return (
    <input
      className={`form__input ${error && "form__input_error"}`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
