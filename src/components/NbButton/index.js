import React from "react";
import NbSpinner from "../NbSpinner";

import "./styles.scss";

const NbButton = ({
  text = "Submit",
  to = null,
  isLoading = false,
  isDisabled = false,
  preIcon = false,
  variant = null,
  handleClick,
  type = "submit",
}) => {
  const Tag = to ? "a" : "button";
  return (
    <Tag
      className={`NbButton NbButton--primary NbButton--${
        isDisabled && "disabled"
      } ${variant && `NbButton--${variant}`}`}
      onClick={handleClick}
      disabled={isDisabled}
      type={type}
      href={to}
    >
      {preIcon && (
        <div className="nb-button__icon nb-button__icon--pre">{preIcon}</div>
      )}

      {isLoading ? <NbSpinner /> : text}
    </Tag>
  );
};

export default NbButton;
