import { useDocumentTitle, useScrollTop } from "hooks";
import React from "react";
import "./contactus.scss"
function ContactUs() {
  useDocumentTitle("Contact Us | Prime Games");
  useScrollTop();

  return (
    <div className="contact__us">
      <h1>Contact Us</h1>
      <h4>Have questions? We'd love to hear from you. Check our FAQs for more information</h4>
    </div>
  );
}

export default ContactUs;
