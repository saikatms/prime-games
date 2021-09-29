import { CHECKOUT_STEP_1 } from "constants/routes";
import { Form, Formik } from "formik";
import { calculateTotal, displayActionMessage } from "helpers/utils";
import { useDocumentTitle, useScrollTop } from "hooks";
import PropType from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import { StepTracker } from "../components";
import withCheckout from "../hoc/withCheckout";
import CreditPayment from "./CreditPayment";
import RazorpayPayment from "./RazorpayPayment";
import Total from "./Total";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name should be at least 4 characters.")
    .required("Name is required"),
  cardnumber: Yup.string()
    .min(13, "Card number should be 13-19 digits long")
    .max(19, "Card number should only be 13-19 digits long")
    .required("Card number is required."),
  expiry: Yup.date().required("Credit card expiry is required."),
  ccv: Yup.string()
    .min(3, "CCV length should be 3-4 digit")
    .max(4, "CCV length should only be 3-4 digit")
    .required("CCV is required."),
  type: Yup.string().required("Please select paymend mode"),
});

const Payment = ({ shipping, payment, subtotal, basket }) => {
  useDocumentTitle("Check Out Final Step | All Is Well");
  useScrollTop();

  const initFormikValues = {
    name: payment.name || "",
    cardnumber: payment.cardnumber || "",
    expiry: payment.expiry || "",
    ccv: payment.ccv || "",
    type: payment.type || "razorpay",
  };
  // const user = firebaseInstance.currentUser;
  // console.log(user);

  const onConfirm = () => {
    const payment_amount = calculateTotal(
      basket.map((product) => parseFloat(product.price))
    );
    const options = {
      key: "rzp_live_2LgM5NDfDvDmmD",
      amount: payment_amount * 100,
      name: "All IS Well",
      description: "Tank You",
      handler(response) {
        const paymentId = response.razorpay_payment_id;
        const url =
          "https://alliswell-server.herokuapp.com" +
          "/api/v1/rzp_capture/" +
          paymentId +
          "/" +
          payment_amount;
        // Using my server endpoints to capture the payment
        fetch(url, {
          method: "get",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((resp) => resp.json())
          // .then(function (data) {
          //   console.log("Request succeeded with JSON response", data);
          //   self.setState({
          //     refund_id: response.razorpay_payment_id,
          //   });
          // })
          .catch(function (error) {
            console.log("Request failed", error);
          });
      },
      prefill: {
        name: "Your Name",
        email: "hello@hello.com",
      },
      notes: {
        address: "Hyderabad,India",
      },
      theme: {
        color: "#66E972",
      },
    };
    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  };

  // async function payNow() {
  //   try {
  //   } catch (error) {}
  // }

  if (!shipping || !shipping.isDone) {
    return <Redirect to={CHECKOUT_STEP_1} />;
  }
  return (
    <div className="checkout">
      <StepTracker current={3} />
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        validate={(form) => {
          if (form.type === "razorpay") {
            // displayActionMessage("Feature not ready yet :)", "info");
            // payNow();
            onConfirm();
          }
        }}
        // onSubmit={onConfirm}
        onSubmit={onConfirm}
      >
        {() => (
          <Form className="checkout-step-3">
            <CreditPayment />
            <RazorpayPayment />
            <Total
              // isInternational={shipping.isInternational}
              basket={basket}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    // isInternational: PropType.bool,
  }).isRequired,
  basket: PropType.arrayOf(PropType.object).isRequired,

  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string,
  }).isRequired,
  subtotal: PropType.number.isRequired,
};

export default withCheckout(Payment);
