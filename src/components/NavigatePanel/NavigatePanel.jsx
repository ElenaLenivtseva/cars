import React from "react";
import "./NavigatePanel.scss";

const NavigatePanel = () => {
  return (
    <div className="navigatePanel">
      <div className="navigatePanel__left">
      <p className="navigatePanel__item">Main Page</p>
      <svg
        className="navigatePanel__item"
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.343312 17.6477C0.451414 17.7594 0.579835 17.848 0.721218 17.9084C0.862601 17.9689 1.01417 18 1.16724 18C1.32032 18 1.47188 17.9689 1.61327 17.9084C1.75465 17.848 1.88307 17.7594 1.99117 17.6477L9.72774 9.6764C9.81404 9.58765 9.88252 9.48224 9.92923 9.3662C9.97595 9.25016 10 9.12576 10 9.00013C10 8.8745 9.97595 8.7501 9.92923 8.63406C9.88252 8.51801 9.81404 8.4126 9.72774 8.32386L1.99117 0.352521C1.53499 -0.117511 0.799501 -0.117511 0.343314 0.352521C-0.112873 0.822551 -0.112874 1.58036 0.343314 2.05039L7.08371 9.00492L0.334005 15.9595C-0.112873 16.4199 -0.112875 17.1873 0.343312 17.6477Z"
          fill="white"
        />
      </svg>

      <p className="navigatePanel__item">Новости и анонсы</p>
      </div>
      <div className="navigatePanel__item navigatePanel__line"></div>
    </div>
  );
};

export default NavigatePanel;
