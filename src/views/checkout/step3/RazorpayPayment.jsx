/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from "formik";
import React from "react";

const RazorpayPayment = () => {
  const { values, setValues } = useFormikContext();

  return (
    <div
      className={`checkout-fieldset-collapse ${
        values.type === "razorpay" ? "is-selected-payment" : ""
      }`}
    >
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === "razorpay"}
            id="modeRazorpay"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: "razorpay" });
              }
            }}
            type="radio"
          />
          <label className="d-flex w-100" htmlFor="modeRazorpay">
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Razorpay</h4>
              <span className="text-subtle d-block margin-top-s">
                Pay easily, fast and secure with Razorpay.
              </span>
            </div>
            {/* <div className="payment-img " /> */}
          </label>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPayment;
