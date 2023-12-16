import { Link } from "react-router-dom";
import { mockBlogsData } from "../../data/data";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsStyles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import BlogCard from "../cards/BlogCard";

import { rectlight } from "../../assets/images";

type Props = {
  headline: string;
  subline: string;
  // slidesData: TestimonialType[];
};

const Blogs = ({
  headline,
  subline,
}: // slidesData,
Props) => {
  return (
    <div className="relative my-[1rem] h-full w-full overflow-hidden md:my-[4rem] lg:my-[6rem]">
      <img
        src={rectlight}
        className="absolute object-cover z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      />
      <div className="container mx-auto flex h-fit flex-col items-center justify-center gap-[2.5rem] p-[2rem]">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className={headlinetStyle}>{headline}</h1>
          <p className={sublinetStyle}>{subline}</p>
        </div>
        {mockBlogsData && mockBlogsData.length > 0 ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            allowSlidePrev={true}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {mockBlogsData?.map((blog, index) => (
              <SwiperSlide key={index} className="mb-10 bg-transparent">
                <BlogCard cardData={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="w-full text-center">No eles found.</p>
        )}
        <Link to="#">
          <button className="btn btn-secondary btn-outline whitespace-nowrap">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
