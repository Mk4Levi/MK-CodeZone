import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

export default function InstructorSection() {
  return (
    <div className="mt-14 sm:mt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-20 items-center">
        {/* Image */}
        <div className="w-full lg:w-[50%]">
          <img
            src={Instructor}
            alt="Instructor"
            className="w-full object-cover shadow-white"
          />
        </div>

        {/* Text and Button */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-10">
          <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Become an
            <HighlightText text={"Instructor"} />
          </div>

          <p className="text-base sm:text-lg text-richblack-300">
            Instructors from Around the Globe Empower Students on MK-CodeZone.
            At MK-CodeZone, we equip educators with the tools and skills needed
            to teach their passion effectively, reaching millions of students
            worldwide.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex gap-2 items-center">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
