import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../App.css";
// Icons
import { FaStar } from "react-icons/fa";
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";

import images from "../../assets";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );
      if (data?.success) {
        setReviews(data?.data);
      }
    })();
  }, []);

  return (
    <div className="text-white">
      <div className="my-[50px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={1} // Default to 1 for mobile
          spaceBetween={15} // Adjust spacing for mobile
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            640: {
              // Small devices
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              // Tablets
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              // Desktops
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1200: {
              // Larger desktops
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
                <div className="flex items-center gap-4">
                  <img
                    src={images.mypic}
                    alt=""
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-richblack-5">
                      Manthan Kumar
                    </h1>
                    <h2 className="text-[12px] font-medium text-richblack-500">
                      {review?.course?.courseName}
                    </h2>
                  </div>
                </div>
                <p className="font-medium text-richblack-25">
                  {review?.review.split(" ").length > truncateWords
                    ? `${review?.review
                        .split(" ")
                        .slice(0, truncateWords)
                        .join(" ")} ...`
                    : `${review?.review}`}
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-yellow-100">
                    {review.rating.toFixed(1)}
                  </h3>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSlider;
