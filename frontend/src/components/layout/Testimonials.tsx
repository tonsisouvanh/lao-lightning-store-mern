import { Link } from "react-router-dom";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";
import { mockTestimonialsData } from "../../data/data";
import TestimonialCard from "../cards/TestimonialCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialsStyles.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";


type Props = {
  headline: string;
  subline: string;
  // slidesData: TestimonialType[];
};

const Testimonials = ({
  headline,
  subline,
}: // slidesData,
Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem]">
      {/* <img
        src={worldbg}
        className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      /> */}
      <div className="container h-fit mx-auto p-[2rem] flex flex-col justify-center items-center gap-[2.5rem]">
        <div className="flex-col justify-center items-center gap-2 md:gap-4 flex">
          <h1 className={headlinetStyle}>{headline}</h1>
          <p className={sublinetStyle}>{subline}</p>
        </div>
        {mockTestimonialsData && mockTestimonialsData.length > 0 ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            allowSlidePrev={true}
            className="mySwiper "
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {mockTestimonialsData?.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-transparent mb-10">
                <TestimonialCard cardData={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="w-full text-center">No eles found.</p>
        )}
        <Link to="#">
          <button className="btn btn-outline whitespace-nowrap">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
