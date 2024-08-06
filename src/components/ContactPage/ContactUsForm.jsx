import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = { status: "OK" };
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-14">
        <div className="flex gap-5">
          {/* firstName */}
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="text-black"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && <span>Please enter Your name</span>}
          </div>

          {/* lastName */}
          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="text-black"
              placeholder="Enter Last name"
              {...register("lastname")}
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-black"
            placeholder="Enter email Address"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Please enter your email address</span>}
        </div>

        {/* phoneNo */}
        <div className="flex flex-col">
          <label htmlFor="phonenumber">Phone Number</label>

          <div className="flex flex-row gap-1">
            {/* dropdown */}

            <select
              name="dropdown"
              id="dropdown"
              className="bg-yellow-50 w-[80px]"
              {...register("countrycode", { required: true })}
            >
              <option value="" disabled selected>
                --code--
              </option>

              {CountryCode.map((element, index) => {
                return (
                  <option key={index} value={element.code}>
                    {element.code} | {element.country}
                  </option>
                );
              })}
            </select>

            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="text-black  w-[calc(100%-90px)]"
              {...register("phoneNo", {
                required: { value: true, message: "Please enter Phone Number" },
                maxLength: { value: 10, message: "Invalid Phone Number" },
                minLength: { value: 8, message: "Invalid Phone Number" },
              })}
            />
          </div>
          {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
        </div>

        {/* message */}
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            className="text-black"
            rows="7"
            placeholder="Enter Your message here"
            {...register("message", { required: true })}
          />
          {errors.message && <span>PLease enter your message.</span>}
        </div>

        <button
          type="submit"
          className="rounded-md bg-yellow-50 text-center px-6 text-[16px] font-bold text-black"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
