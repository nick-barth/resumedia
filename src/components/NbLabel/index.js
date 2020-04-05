import React from "react";
import NbTooltip from "../NbTooltip";
import "./styles.scss";

const index = ({ required, name, children, tooltip }) => (
  <label className="NbLabel" htmlFor={name}>
    {children}
    {required ? "*" : null}
    {tooltip ? (
      <div className="NbLabel__tooltip">
        <NbTooltip tip={tooltip} />
      </div>
    ) : null}
  </label>
);

export default index;
