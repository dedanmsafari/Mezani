import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.services";

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (formData) => {
    const { status, values } = formData;
    const inComplete = Object.values(status).includes("incomplete");

    const card = {
      number: values.number,
      exp_month: values.expiry.split("/")[0],
      exp_year: values.expiry.split("/")[1],
      cvc: values.cvc,
      name: name,
    };

    if (!inComplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (error) {
        onError();
      }
    }
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
