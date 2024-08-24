import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Get in Touch
      </h1>
      <br />
      <p>
        Got Questions or Feedback? Reach Out to Us by Filling Out This Form!
      </p>
      <br />
      {/* <div className="mt-7"> */}
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
