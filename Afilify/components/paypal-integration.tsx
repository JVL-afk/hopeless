'use client'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalIntegration({ amount, onSuccess }) {
  const initialOptions = {
    clientId: "test", // Replace with your PayPal client ID in production
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount.toString(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (onSuccess) {
              onSuccess(details);
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
