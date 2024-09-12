import React from "react";
import "./NavigatePanel.scss";
import ArrowNext from "../icons/ArrowNext";


interface NavigatePanelProps {
  page:  string;
  title: string;
}

const NavigatePanel: React.FC<NavigatePanelProps> = ({page, title}) => {
  return (
    <div className="navigate-panel">
      <div className="navigate-panel__left">
        <p className="navigate-panel__item">{page}</p>
        <ArrowNext className="navigate-panel__item"/>
        <p className="navigate-panel__item">{title}</p>
      </div>
      <div className="line navigate-panel__item navigate-panel__line"></div>
    </div>
  );
};


export default NavigatePanel;
