import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import NbInput from "../../../../components/NbInput";
import NbCard from "../../../../components/NbCard";
import NbButton from "../../../../components/NbButton";

import { WizardContext } from "../../../wizard";
import "./styles.scss";

function StepOne() {
  const { data, setData } = useContext(WizardContext);
  let history = useHistory();
  return (
    <Formik
      initialValues={data.basic}
      validate={(values) => {
        const errors = {};

        if (!values.first_name) {
          errors.first_name = "Required";
        }

        if (!values.last_name) {
          errors.last_name = "Required";
        }

        if (!values.address) {
          errors.address = "Required";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setData("basic", values);
          history.push("/education");
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <NbCard title="Personal Information">
          <form onSubmit={handleSubmit}>
            <NbInput
              errors={
                errors.first_name && touched.first_name && errors.first_name
              }
              autoFocus
              label="First Name"
              name="first_name"
              value={values.first_name}
              handleChange={handleChange}
            />
            <NbInput
              errors={errors.last_name && touched.last_name && errors.last_name}
              label="Last Name"
              name="last_name"
              value={values.last_name}
              handleChange={handleChange}
            />
            <NbInput
              errors={errors.email && touched.email && errors.email}
              label="Email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              onBlur={handleBlur}
            />
            <NbInput
              errors={errors.address && touched.address && errors.address}
              label="Address"
              name="address"
              value={values.address}
              handleChange={handleChange}
            />
            <div className="step-one__button-container">
              <NbButton
                text="Save"
                handleClick={handleSubmit}
                isLoading={isSubmitting}
              />
            </div>
          </form>
        </NbCard>
      )}
    </Formik>
  );
}

export default StepOne;
