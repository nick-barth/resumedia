import React from "react";
import NbLabel from "../NbLabel";
import "./styles.scss";

const NbInput = ({
  label,
  errors,
  type = "text",
  name,
  style,
  onBlur,
  value = "",
  handleChange,
  required,
  rows,
  prepend,
  tooltip,
  autoFocus = false,
  field,
}) => {
  const Tag = rows ? "textarea" : "input";
  return (
    <div className="NbInput" style={style}>
      <div className="NbInput__labels">
        <NbLabel for={name} tooltip={tooltip} required={required}>
          {label}
        </NbLabel>
        <div className="NbInput__error">{errors}</div>
      </div>
      <div className="NbInput__container">
        {prepend && <div className="NbInput__prepend">{prepend}</div>}
        <Tag
          autoFocus={autoFocus}
          className={`NbInput__input ${errors && "NbInput__input--error"}`}
          type={type}
          name={name}
          value={value}
          onChange={(v) => handleChange(v)}
          rows={rows}
          onBlur={onBlur}
          {...field}
        />
      </div>
    </div>
  );
};

export default NbInput;
