import React from "react";
import FoundingStory from "../assets/Images/FoundingStory.jpg";
import BannerImage1 from "../assets/Images/aboutus1.jpg";
import BannerImage2 from "../assets/Images/aboutus2.jpg";
import BannerImage3 from "../assets/Images/aboutus3.avif";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Leading the Future of Online Education with
            <HighlightText text={"Innovative Solutions"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              MK-CodeZone Leads the Way in Online Education Innovation. We are
              committed to shaping the future of learning through advanced
              courses, state-of-the-art technology, and a dynamic educational
              community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Origin
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                MK-CodeZone was established with a clear mission to
                revolutionize education through innovation. Founded by a team of
                forward-thinking educators, technology experts, and passionate
                learners, our platform emerged from a shared commitment to
                enhancing access to high-quality education in an increasingly
                digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Driven by firsthand experience with the constraints of
                traditional education, we set out to create a solution that
                transcends physical and geographical limitations. Our goal is to
                provide a flexible, accessible, and impactful learning
                experience that empowers individuals globally to achieve their
                full potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#eaa13a] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                We aim to redefine the landscape of education with a pioneering
                e-learning platform. Our dedicated team has meticulously crafted
                a sophisticated, user-friendly environment that integrates
                cutting-edge technology with compelling content, creating a
                transformative and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission extends beyond simply providing online courses. We
                strive to build a thriving learning community where individuals
                can engage, collaborate, and benefit from collective knowledge.
                Through forums, live sessions, and networking opportunities, we
                cultivate an environment that encourages sharing and dialogue,
                enhancing the overall educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <StatsComponenet /> */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Learner Feedback
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
};

export default About;
