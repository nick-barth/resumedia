import React from "react";
import NbLabel from "../NbLabel";
import db from "../../firebase";
import "./style.scss";

const NbFileUpload = ({
  label,
  name,
  value = "",
  required,
  path = "",
  team,
  member,
  handleComplete
}) => {
  let fileInput = React.createRef();
  const handleUpload = evt => {
    evt.stopPropagation();
    evt.preventDefault();
    const file = evt.target.files[0];
    if (member) {
      db.uploadMemberPhoto({ member, file });
      handleComplete();
    } else {
      db.uploadFile({ team, path, file });
    }
  };

  return (
    <div className="NbFileUpload">
      <NbLabel for={name} required={required}>
        {label}
      </NbLabel>
      <div className="NbFileUpload__container">
        <div
          className="NbFileUpload__area"
          onClick={() => fileInput.current.click()}
        >
          {value.name ? value.name : "Please click to upload a photo"}
          <input
            ref={fileInput}
            className="NbFileUpload__input"
            type="file"
            id="single"
            onChange={handleUpload}
          />
        </div>
        {value.url && (
          <div className="NbFileUpload__preview">
            <img
              className="NbFileUpload__image"
              src={value.url}
              alt={value.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NbFileUpload;
