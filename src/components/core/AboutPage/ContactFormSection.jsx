import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto">
      <h1>Get in Touch</h1>
      <br />
      <p>We'd love to here for you, Please fill out this form.</p>
      <br />
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
