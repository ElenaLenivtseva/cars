import React from "react";
import { Link } from "react-router-dom";
import "./HeaderIcon.scss";
import { FC, ReactElement } from 'react';

interface HeaderIconProps {
  link: string;
  children?: ReactElement; 
}

const HeaderIcon: FC<HeaderIconProps> = ({ link, children = null }) => (
    <div className="header-icon header-icon__wrap">
      <Link to={link}>{children}</Link>
    </div>
);

export default HeaderIcon;
