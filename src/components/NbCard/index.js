import React from "react";
import NbDivider from "../NbDivider";
import "./styles.scss";

const Card = ({ title, children, desc }) => {
  return (
    <div className="NbCard">
      {title && <h2 className="NbCard__header-title">{title}</h2>}
      {desc && <div className="NbCard__desc">{desc}</div>}
      <NbDivider />
      {children}
    </div>
  );
};

export default Card;
