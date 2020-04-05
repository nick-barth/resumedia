import React from "react";
import "./styles.scss";
import NbButton from "../NbButton";

const NbFormSubmit = ({ errors = [], isDisabled, isLoading, text }) => {
  return (
    <div className="NbFormSubmit">
      <NbButton
        isDisabled={isDisabled}
        text={text}
        type="submit"
        isLoading={isLoading}
      />
      <div className="NbErrorText"> {errors.map(e => e)} </div>
    </div>
  );
};
export default NbFormSubmit;
