import React from "react";

interface InputProps {
  title: string;
  className: string;
  error: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const Input: React.FC<InputProps> =({ title, error, className, name, type, placeholder, value, handleChange }) => {
  return (
    <div className={`form__label ${className}`}>
      <label className="form__label-content">
        {title}
        <input
          className={`form__input ${error && "form__input_error"}`}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
      <p className="form__error">{error}</p>
    </div>
  );
};

export default Input;
