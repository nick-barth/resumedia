import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import NbCard from "../../../../components/NbCard";
import NbConfetti from "../../../../components/NbConfetti";

import { WizardContext } from "../../../wizard";

import "./styles.scss";

function Preview() {
  const { data, setData } = useContext(WizardContext);

  console.log("State", data);
  let history = useHistory();
  return (
    <NbCard className="wow" title={"Preview"}>
      <div>
        <NbConfetti />
      </div>
      <div className="Preview__preview">
        <h2>Basic Info</h2>
        <p>
          {data.basic.first_name} {data.basic.last_name}
        </p>
        <p>{data.basic.email}</p>
        {data.education.length > 0 && (
          <div>
            <h2>Education</h2>
            {data.education.map((edu) => {
              return (
                <div key={edu.school}>
                  {edu.school}
                  From {edu.start} to {edu.end}
                  <p>I studed {edu.study}</p>
                </div>
              );
            })}
          </div>
        )}
        {data.experience.length > 0 && (
          <div>
            <h2>Experience</h2>
            {data.experience.map((exp) => {
              return (
                <div key={exp.school}>
                  {exp.company}
                  <p>
                    From {exp.start} to {exp.end}
                  </p>
                  <p>Role: {exp.role}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </NbCard>
  );
}

export default Preview;
