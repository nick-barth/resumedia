import React, { createContext, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Logo
import Logo from "../../images/logo.svg";

//Steps
import StepOne from "./steps/step-one";
import StepTwo from "./steps/step-two";
import StepThree from "./steps/step-three";
import Preview from "./steps/preview";

import "./index.scss";

const STEPS = [
  {
    url: "basics",
    Component: StepOne,
    name: "Basics",
  },
  {
    url: "education",
    Component: StepTwo,
    name: "Education",
  },
  {
    url: "experience",
    Component: StepThree,
    name: "Experience",
  },
];

export const WizardContext = createContext({
  data: {},
  setData: () => console.log("pls hire me"),
});

function Wizard({ location }) {
  const [data, updateData] = useState({
    basic: { first_name: "", last_name: "", email: "", address: "" },
    education: [{ school: "", start: "", end: "", study: "" }],
    experience: [{ company: "", start: "", end: "", role: "" }],
  });
  const setData = (key, values) => {
    updateData({ ...data, [key]: values });
  };

  let { path } = useRouteMatch();

  return (
    <div className="Wizard">
      <WizardContext.Provider Provider value={{ data, setData }}>
        <div className="Wizard__sidebar">
          <div className="Wizard__logo">
            <img className="Wizard__logo__src" src={Logo} alt="Resumedia" />
          </div>
          <ol className="Wizard__steps">
            {STEPS.map((step, index) => {
              const current = STEPS.findIndex((s) =>
                location.pathname.includes(s.url)
              );
              return (
                <li
                  key={step.url}
                  className={`Wizard__step-item  ${
                    index === current && "Wizard__step-item--current"
                  }`}
                >
                  <Link to={step.url}>{step.name}</Link>
                  <div
                    className={`Wizard__progress ${
                      (index < current || current == -1) &&
                      "Wizard__progress--complete"
                    }
                ${index === current && "Wizard__progress--current"}`}
                  ></div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="Wizard__content">
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={{
                appear: 500,
                enter: 500,
                exit: 0,
              }}
            >
              <Switch location={location}>
                {STEPS.map((route) => {
                  return (
                    <Route
                      path={path + route.url}
                      key={route.url}
                      component={route.Component}
                    />
                  );
                })}
                <Route
                  path={path + "preview"}
                  key={"preview"}
                  component={Preview}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </WizardContext.Provider>
    </div>
  );
}

export default Wizard;
