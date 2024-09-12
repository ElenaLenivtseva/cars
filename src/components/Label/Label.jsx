import React from "react";

const Label = ({ children, title, error, className }) => {
  return (
    <div className={`form__label-wrap ${className}`}>
      <label className="form__label">
        {title}
        {children}
      </label>
      <p className="form__error">{error}</p>
    </div>
  );
};

export default Label;
