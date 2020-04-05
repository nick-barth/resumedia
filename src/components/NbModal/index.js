import React from "react";
import NbDivider from "../NbDivider";
import NbButton from "../NbButton";
import { X } from "react-feather";
import "./style.css";

const NbModal = ({ active, title, children, handleClose, actions = [] }) => {
  return (
    <div className={`NbModal__bg NbModal_bg--${active ? "active" : null}`}>
      <div className={`NbModal NbModal--${active ? "active" : null}`}>
        <div className="NbModal__close">
          <X onClick={handleClose} />
        </div>
        <h3 className="NbModal__title">{title}</h3>
        <NbDivider />
        {children}
        {actions.length > 0 && (
          <>
            <NbDivider />
            <div className="NbModal__actions">
              {actions.map(action => {
                return (
                  <NbButton
                    key={action.text}
                    text={action.text}
                    preIcon={action.icon}
                    handleClick={action.action}
                    type="submit"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NbModal;
