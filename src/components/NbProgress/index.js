import React from "react";

const NbProgress = ({ barVariant, max, value }) => {
  return (
    <progress className={`nb-progress ${barVariant}`} value={value} max={max} />
  );
};

export default NbProgress;
