import React from "react";

import "./style.css";

const NbListItem = ({ title, actions, img, tooltip }) => {
  return (
    <div className={`NbListItem`}>
      {img ? (
        <div className="NbListItem__img">
          <img className="NbListItem__photo" src={img} alt={title} />
        </div>
      ) : null}
      <div className="NbListItem__title">{title}</div>
      <div className="NbListItem__actions">
        {actions.map((action, i) => (
          <div key={i} className="NbListItem__action-container">
            {action}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NbListItem;
