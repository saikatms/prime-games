import { useDocumentTitle, useScrollTop } from "hooks";
import React from "react";

function AboutUs() {
  useDocumentTitle("About Us | Prime Games");
  useScrollTop();

  return (
    <main className="content">
      <div>
        <h3>
          With All is well app, you can effortlessly order medicines online and
          get it safely delivered to your doorstep on the same day. Just upload
          your prescription or required medicines and we’ll deliver it to your
          desired location within the city.{" "}
        </h3>
        <h3>
          All is well is the fastest growing online medicine delivery
          application with over 5 lakhs satisfied customers across the city. We
          deliver all kinds of health care products and provide highest
          satisfactory service while keeping in mind distance is no bar. All is
          well is always equipped with a wide range of allopathy medicines,
          Covid related essentials, food & nutrition, personal care, baby care,
          diabetic, women hygiene, general healthcare and wellness products to
          ensure our customers never run out of vital medicines and health care
          products.
        </h3>
        <li>Purchase affordable medicines @ All Is Well – Online Pharmacy.</li>
        <li>
          We have a hassle-free ordering process with super-fast delivery of
          products. You can either place an order through the app by uploading
          your prescription or simply call the store and our team of pharmacists
          will place the order for you. Please check the delivery availability
          in your location by downloading the app.
        </li>
        <li>
          Our team at All Is Well work tirelessly to give you the best service.
          Your order will be verified and confirmed by our dedicated
          Pharmacists, before it is delivered to you.
        </li>
        <li>
          Pay Online: Go cashless and pay in a fast and secure manner through
          UPI, credit/debit cards, mobile wallets and Net banking. You can also
          pay in cash at the time of delivery.
        </li>
        <li>
          With All Is Well app, you can save up to 30% on medicines and other
          healthcare products.
        </li>
        <li>
          Feedback is what helps us to keep improving and we’re working hard to
          make the experience better for you. Please feel free to tell us what
          you feel.
        </li>
      </div>
    </main>
  );
}

export default AboutUs;
