import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";

export default function LearninglanguageSection() {
  return (
    <div className="mt-14 sm:mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 items-center">
        {/* Title */}
        <div className="text-3xl sm:text-4xl font-semibold text-center">
          Your Ultimate
          <HighlightText text={" Language Learning Tool "} />
        </div>

        {/* Description */}
        <div className="text-center text-richblack-600 mx-auto text-sm sm:text-base mt-2 sm:mt-3 w-full sm:w-[70%]">
          Transform the way you learn languages with MK-CodeZone! Featuring
          realistic voice-overs in over 20 languages, MK-CodeZone offers
          seamless progress tracking, customizable schedules, and more. Make
          mastering multiple languages easy and efficient with our versatile
          tool.
        </div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 sm:mt-5">
          <img
            src={know_your_progress}
            alt="KnowYourprogressImage"
            className="object-contain w-full sm:w-[30%] lg:w-[25%]"
          />
          <img
            src={compare_with_others}
            alt="comparewithothers"
            className="object-contain w-full sm:w-[30%] lg:w-[25%]"
          />
          <img
            src={plan_your_lessons}
            alt="planyourlessons"
            className="object-contain w-full sm:w-[30%] lg:w-[25%]"
          />
        </div>

        {/* CTA Button */}
        <div className="w-fit mb-5 mx-auto font-bold">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
