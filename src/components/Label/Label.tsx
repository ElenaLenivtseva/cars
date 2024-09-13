import React from "react";

interface LabelProps {
  title: string;
  className: string;
  error: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const Label: React.FC<LabelProps> =({ title, error, className, name, type, placeholder, value, handleChange }) => {
  return (
    <div className={`form__label-wrap ${className}`}>
      <label className="form__label">
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

export default Label;
