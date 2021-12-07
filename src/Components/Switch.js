import React from "react";
import "./Switch.css";

function ToggleLabel(toggle) {
  if (toggle) {
    return (
      <div className="toggle-box">
        <span className="passive-toggle left-toggle">Mint</span>{" "}
        <span className="active-toggle right-toggle">Redeem</span>
      </div>
    );
  }
  return (
    <div className="toggle-box">
      <span className="active-toggle left-toggle">Mint</span>{" "}
      <span className="passive-toggle right-toggle">Redeem</span>
    </div>
  );
}

function Switch(isOn, handleToggle) {
  return (
    <div>
      <input
        checked={isOn}
        onChange={() => handleToggle(!isOn)}
        className="react-switch-checkbox input-panel"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        {ToggleLabel(isOn)}
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
}

export default Switch;
