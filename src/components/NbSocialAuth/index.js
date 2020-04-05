import React from "react";
import NbButton from "../NbButton";
import { Facebook } from "react-feather";

import "./styles.scss";

const NbSocialAuth = ({ handleClick }) => {
  return (
    <div className="NbSocialAuth">
      <div className="NbSocialAuth__button">
        <NbButton
          preIcon={<Facebook />}
          text="Facebook"
          type="submit"
          variant="facebook"
          handleClick={handleClick("facebook")}
        />
      </div>
      <div className="NbSocialAuth__button">
        <NbButton
          text="Google"
          type="submit"
          variant="google"
          handleClick={handleClick("google")}
        />
      </div>
    </div>
  );
};

export default NbSocialAuth;
