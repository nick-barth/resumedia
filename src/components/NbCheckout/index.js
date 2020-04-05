import React, { Component, useContext, useState } from "react";
import firebase from "../../firebase";
import NbButton from "../NbButton";
import { CardElement, injectStripe } from "react-stripe-elements";
import { AuthContext } from "../../App";
import { TeamContext } from "../../routes/Dashboard";

import "./styles.css";

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        },
        ...(padding ? { padding } : {})
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };
};

function Checkout(props) {
  const team = useContext(TeamContext);
  const authUser = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  async function submit(ev) {
    setIsPaymentLoading(true);
    let { token } = await props.stripe.createToken({ name: authUser.email });
    console.log(token);
    let response = await fetch(
      `https://us-central1-esportscms-2ba43.cloudfunctions.net/charge?email=${
        authUser.email
      }&token=${token && token.id}`
    );

    if (response.ok) {
      firebase.updateTeam({
        id: team.id,
        values: {
          ...team,
          activePayment: true
        }
      });
    } else {
      const message = await response.json();
      setIsPaymentLoading(false);
      setErrorMessage(message);
    }
  }

  return (
    <div className="checkout">
      {!team.activePayment ? (
        <div>
          <p>Current pricing is $13.99 a month. You will be billed monthly.</p>
          <CardElement
            className="NbCheckout__strip_input"
            {...createOptions("16px")}
          />
          {errorMessage && (
            <p style={{ color: "red" }}>Error: {errorMessage}</p>
          )}
          <NbButton
            handleClick={submit}
            text="Pay"
            isLoading={isPaymentLoading}
          />
        </div>
      ) : (
        <div className="checkout__active">
          Congratulations, you are currently subscribed to burst.gg. If you need
          any assistance feel free to contact support
        </div>
      )}
    </div>
  );
}

export default injectStripe(Checkout);
