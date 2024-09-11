import React from "react";
import "./NavigatePanel.scss";
import { navigatePanelSvg } from "../../icons/icons";

const NavigatePanel = () => {
  return (
    <div className="navigate-panel">
      <div className="navigate-panel__left">
        <p className="navigate-panel__item">Main Page</p>
        {navigatePanelSvg}
        <p className="navigate-panel__item">Новости и анонсы</p>
      </div>
      <div className="line navigate-panel__item navigate-panel__line"></div>
    </div>
  );
};

export default NavigatePanel;
