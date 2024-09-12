import React from "react";
import { ReactElement } from 'react';

interface LabelProps {
  error: string;
  title: string;
  className: string;
  children?: ReactElement; 
}
const Label: React.FC<LabelProps> =({ children=null, title, error, className }) => {
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
