import React from "react";
import { useHistory } from "react-router-dom";

import NbConfetti from "../../../../components/NbConfetti";

import "./styles.scss";

function Preview() {
  let history = useHistory();
  return (
    <div className="wow">
      <div>
        <NbConfetti />
      </div>
      Preview Here
    </div>
  );
}

export default Preview;
