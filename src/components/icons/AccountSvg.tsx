import React from "react";
import { svgProps } from "./propsForSvg";

const AccountSvg: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 13.2105C11.3657 13.2105 8.5 10.4201 8.5 7.10526C8.5 3.79044 11.3657 1 15 1C18.6343 1 21.5 3.79044 21.5 7.10526C21.5 10.4201 18.6343 13.2105 15 13.2105ZM29 28.4211V29H28.3333H1V28.4211C1 22.9303 5.73408 18.3684 11.6667 18.3684H18.3333C24.2643 18.3684 29 22.9304 29 28.4211Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AccountSvg;
