import React from "react";
import "./NavigatePanel.scss";
import { navigatePanelSvg } from "../../icons/icons";

const NavigatePanel = ({page, title}) => {
  return (
    <div className="navigate-panel">
      <div className="navigate-panel__left">
        <p className="navigate-panel__item">{page}</p>
        {navigatePanelSvg}
        <p className="navigate-panel__item">{title}</p>
      </div>
      <div className="line navigate-panel__item navigate-panel__line"></div>
    </div>
  );
};

export default NavigatePanel;
