import React from "react";

import "./styles.scss";

const NbDivider = ({ text }) => {
  return (
    <div className="NbDivider">
      <hr className="NbDivider__border" />
      {text && <div className="NbDivider__text">{text}</div>}
      <hr className="NbDivider__border" />
    </div>
  );
};

export default NbDivider;
