import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51HPoijCuhJ7Mvekg5gz8yTKVAHrTJnYI0ADMWXL6SUpvIi2cEh1iiwSaAWdB7qv7xfBU9jDxfLbxlvGxcPLFG5RE00RtPe4Pmr"
);

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    method: "POST",
    body: JSON.stringify({ token, amount, name }),
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Ooops! Payment failed");
    }
    return res.json();
  });
};
