import React from "react";

interface InputProps {
  error: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: ()=>void;
}

const Input: React.FC<InputProps> = ({error, name, type, placeholder, value, handleChange}) => {
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

