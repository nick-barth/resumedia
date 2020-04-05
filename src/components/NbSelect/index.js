import React from "react";
import NbLabel from "../NbLabel";
import { ChevronDown } from "react-feather";

import "./styles.scss";

const NbSelect = ({ label, items, value = "", handleChange, tooltip }) => {
  return (
    <div className="NbSelect">
      <NbLabel tooltip={tooltip}>{label}</NbLabel>
      <div className="NbSelect__input-container">
        <ChevronDown className="NbSelect__arrow" />
        <select
          onChange={handleChange}
          value={value}
          className="NbSelect__input"
        >
          <option value="" />
          {items.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NbSelect;
