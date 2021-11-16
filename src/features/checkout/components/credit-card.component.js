import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.services";

export const CreditCardInput = ({ name }) => {
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
    const info = await cardTokenRequest(card);
    console.log(info);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
