import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
  miniplacesbg,
  place1,
  place2,
  place3,
} from "../../assets/images/index";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

const mockImgs = [
  { id: 1, imageUrl: place1, name: "Pha That Luang" },
  { id: 2, imageUrl: place2, name: "Pa Tu Xay" },
  { id: 3, imageUrl: place3, name: "Tat Sone (Water fall)" },
  { id: 4, imageUrl: place3, name: "Tat Sone (Water fall)" },
  { id: 5, imageUrl: place3, name: "Tat Sone (Water fall)" },
];

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TestimonialsStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DiscoverPlace = () => {
  return (
    <div className="relative my-[1rem] h-full w-full overflow-hidden md:my-[4rem] lg:my-[6rem]">
      <img
        src={miniplacesbg}
        className="absolute bottom-0 left-0 right-0 top-0 z-[-1] hidden h-full w-full object-cover opacity-50 lg:object-contain"
        alt=""
      />
      <div className="container mx-auto flex flex-col items-center justify-center gap-[4.5rem] p-[2rem]">
        <div className="flex flex-col items-center justify-start gap-[1.5rem] self-stretch md:flex-row-reverse md:items-start">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className={headlinetStyle}>
              Discover Interesting Places to Visit
            </h1>
            <p className={sublinetStyle}>
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam a ultrices quam. Fusce rutrum mauris quis urna semper
              lacinia.
            </p>
            <div className="mt-10 hidden md:flex">
              <Link to="#">
                <button className="btn btn-outline whitespace-nowrap">
                  View all
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="space-y-5">
            <div className="h-auto w-full lg:h-[32.5rem] lg:w-[44.5rem]">
              {(
                <LazyLoadImage
                  className="h-full w-full rounded-[10px] object-cover"
                  src={place1}
                  alt={"place"}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              ) || (
                <Skeleton
                  className="h-full w-full rounded-[10px] object-cover"
                  count={1}
                />
              )}
            </div>
            <div className="flex w-full flex-wrap items-start justify-start gap-6 self-stretch">
              {mockImgs.map((ele) => (
                <div
                  key={ele.id}
                  className="h-[2.8rem] w-[2.8rem] lg:h-[7rem] lg:w-[7rem]"
                >
                  <img
                    className="h-full w-full rounded-[5px] object-cover"
                    src={ele.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {mockImgs?.map((slide) => (
              <SwiperSlide key={slide.id} className="mb-10 bg-transparent">
                <div className="relative h-[20rem] w-full lg:h-[32.5rem] lg:w-[44.5rem]">
                  {/* <img
                    className="h-full w-full rounded-[5px] object-cover"
                    src={slide.imageUrl}
                  /> */}
                  <LazyLoadImage
                    className="h-full w-full rounded-[10px] object-cover"
                    src={slide.imageUrl}
                    alt={"place"}
                    effect="blur"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/30 p-5 backdrop-blur-sm">
                    <h1 className="text-base text-white lg:text-xl">
                      {slide.name}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 md:hidden">
            <Link to="#">
              <button className="btn btn-outline whitespace-nowrap">
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPlace;
