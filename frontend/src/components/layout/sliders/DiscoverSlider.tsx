// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Card from "../../cards/Card";
import { CardType } from "../../../type";

type Props = {
  slidesData: CardType[];
  // slidesData: T[];
  slidesPerView: number;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
  cardSize?: string;
  topic?: string;
};

const DiscoverSlider = ({
  slidesData,
  slidesPerView = 1,
  cardSize,
  topic,
  breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
}: Props) => {
  return (
    <>
      {slidesData && slidesData.length > 0 ? (
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          slidesPerView={slidesPerView}
          allowSlidePrev={true}
          className="mySwiper"
          breakpoints={breakpoints}
        >
          {slidesData?.map((slide) => (
            <SwiperSlide key={slide.id} className="mb-10 bg-transparent">
              <Card cardSize={cardSize} cardData={slide} topic={topic} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="w-full text-center">No eles found.</p>
      )}
    </>
  );
};

export default DiscoverSlider;
