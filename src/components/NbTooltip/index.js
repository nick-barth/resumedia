import React from "react";
import { HelpCircle } from "react-feather";
import ReactTooltip from "react-tooltip";
import "./styles.scss";

const NbTooltip = ({ tip, icon: Icon = HelpCircle }) => {
  return (
    <div className="NbTooltip">
      <ReactTooltip
        place="top"
        type="dark"
        effect="solid"
        className="NbTooltip__tooltip"
        multiline
        delayHide={300}
        clickable={true}
      />
      <div data-tip={tip} className="NbTooltip__icon">
        <Icon size={16} />
      </div>
    </div>
  );
};

export default NbTooltip;
