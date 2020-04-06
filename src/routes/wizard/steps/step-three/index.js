import React from "react";
import NbInput from "../../../../components/NbInput";
import NbCard from "../../../../components/NbCard";
import NbButton from "../../../../components/NbButton";
import { Formik, Form, Field, FieldArray } from "formik";
import { useHistory } from "react-router-dom";
import { Trash2 } from "react-feather";
import "./styles.scss";

function StepThree() {
  let history = useHistory();
  return (
    <Formik
      initialValues={{
        experience: [{ company: "", start: "", end: "", role: "" }],
      }}
      onSubmit={(values) =>
        setTimeout(() => {
          history.push("/preview");
        }, 400)
      }
      render={({ values }) => (
        <NbCard title="Experience">
          <Form>
            <FieldArray
              name="experience"
              render={(arrayHelpers) => (
                <div>
                  {values.experience && values.experience.length > 0 ? (
                    values.experience.map((edu, index) => {
                      return (
                        <div className="step-three__edu-container" key={index}>
                          <Field
                            name={`experience.${index}.company`}
                            label="Company"
                            component={NbInput}
                            handleChange={arrayHelpers.form.handleChange}
                          />
                          <div className="step-three__combined-line">
                            <Field
                              name={`experience.${index}.start`}
                              label="Start year"
                              component={NbInput}
                              handleChange={arrayHelpers.form.handleChange}
                            />
                            <Field
                              name={`experience.${index}.end`}
                              label="End year"
                              component={NbInput}
                              handleChange={arrayHelpers.form.handleChange}
                            />
                          </div>
                          <Field
                            name={`experience.${index}.role`}
                            label="Role"
                            component={NbInput}
                            handleChange={arrayHelpers.form.handleChange}
                          />
                          <NbButton
                            type="button"
                            text=""
                            preIcon={<Trash2 />}
                            handleClick={() => arrayHelpers.remove(index)} // remove a edu from the list
                          ></NbButton>
                        </div>
                      );
                    })
                  ) : (
                    <div className="step-three__ug-oh">
                      {"Everyone has to start somewhere!"}
                    </div>
                  )}
                  <div className="step-three__button-container">
                    <NbButton
                      type="button"
                      text={"Add education"}
                      variant="secondary"
                      handleClick={() => arrayHelpers.insert(0, "")} // insert an empty string at a position
                    ></NbButton>
                    <NbButton type="submit" text={"Preview"}></NbButton>
                  </div>
                </div>
              )}
            />
          </Form>
        </NbCard>
      )}
    />
  );
}

export default StepThree;
