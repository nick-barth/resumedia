import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Logo
import Logo from "../../images/logo.svg";
//Components
import NbButton from "../../components/NbButton";

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

function Wizard({ location }) {
  let { path } = useRouteMatch();

  return (
    <div className="Wizard">
      <div className="Wizard__sidebar">
        <div className="Wizard__logo">
          <img className="Wizard__logo__src" src={Logo} alt="Resumedia" />
        </div>
        <ol className="Wizard__steps">
          {STEPS.map((step, index) => {
            const current = STEPS.findIndex((s) =>
              location.pathname.includes(s.url)
            );
            console.log(current);
            return (
              <li
                key={step.url}
                className={`Wizard__step-item  ${
                  index === current && "Wizard__step-item--current"
                }`}
              >
                {step.name}
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
    </div>
  );
}

export default Wizard;
