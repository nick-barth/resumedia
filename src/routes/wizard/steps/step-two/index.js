import React from "react";
import { useHistory } from "react-router-dom";
import NbInput from "../../../../components/NbInput";
import NbCard from "../../../../components/NbCard";
import NbButton from "../../../../components/NbButton";
import { Formik, Form, Field, FieldArray } from "formik";
import { Trash2 } from "react-feather";
import "./styles.scss";

function StepTwo() {
  let history = useHistory();
  return (
    <Formik
      initialValues={{
        educations: [{ school: "", start: "", end: "", study: "" }],
      }}
      onSubmit={(values) =>
        setTimeout(() => {
          history.push("/experience");
        }, 400)
      }
      render={({ values }) => (
        <NbCard title="Education">
          <Form>
            <FieldArray
              name="educations"
              render={(arrayHelpers) => (
                <div>
                  {values.educations && values.educations.length > 0 ? (
                    values.educations.map((edu, index) => {
                      return (
                        <div className="step-two__edu-container" key={index}>
                          <Field
                            name={`educations.${index}.school`}
                            label="School"
                            autoFocus
                            component={NbInput}
                            handleChange={arrayHelpers.form.handleChange}
                          />
                          <div className="step-two__combined-line">
                            <Field
                              name={`educations.${index}.start`}
                              label="Start year"
                              component={NbInput}
                              handleChange={arrayHelpers.form.handleChange}
                            />
                            <Field
                              name={`educations.${index}.end`}
                              label="End year"
                              component={NbInput}
                              handleChange={arrayHelpers.form.handleChange}
                            />
                          </div>
                          <Field
                            name={`educations.${index}.study`}
                            label="Study"
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
                    <div className="step-two__ug-oh">
                      {"Higher education isn't for everyone!"}
                    </div>
                  )}
                  <div className="step-two__button-container">
                    <NbButton
                      type="button"
                      text={"Add education"}
                      variant="secondary"
                      handleClick={() => arrayHelpers.insert(0, "")} // insert an empty string at a position
                    ></NbButton>
                    <NbButton type="submit" text={"Next"}></NbButton>
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

export default StepTwo;
