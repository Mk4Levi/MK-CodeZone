import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

export default function TimelineSection() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 items-center">
        {/* Timeline Items */}
        <div className="flex flex-col w-full lg:w-[45%] gap-5">
          {timeline.map((element, index) => (
            <div
              className="flex flex-col lg:flex-row gap-4 lg:gap-6"
              key={index}
            >
              <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white flex items-center justify-center">
                <img
                  src={element.Logo}
                  alt={element.heading}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="font-semibold text-lg lg:text-[18px]">
                  {element.heading}
                </h2>
                <p className="text-sm lg:text-base">{element.Description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Image */}
        <div className="relative shadow-red-200">
          <img
            src={timelineImage}
            alt="timelineImage"
            className="shadow-white object-cover"
          />

          <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <h1 className="text-3xl font-bold">10</h1>
              <p className="text-caribbeangreen-300 text-sm">
                Years of Experience
              </p>
            </div>

            <div className="flex flex-row gap-5 items-center  px-7">
              <h1 className="text-3xl font-bold">250</h1>
              <p className="text-caribbeangreen-300 text-sm">
                Types of courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
