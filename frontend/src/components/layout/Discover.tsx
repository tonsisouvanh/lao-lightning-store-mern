import { Link } from "react-router-dom";
import { worldbg } from "../../assets/images/index";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";
import DiscoverSlider from "./sliders/DiscoverSlider";
import { CardType, BlogType } from "../../type";

type Props = {
  headline: string;
  subline: string;
  slidesData: CardType[] | BlogType[];
  slidesPerView: number;
  cardSize?: string;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
  topic?: string;
};

const Discover = ({
  headline,
  subline,
  slidesData,
  slidesPerView,
  breakpoints,
  cardSize,
  topic,
}: Props) => {
  return (
    <div className="relative my-[1rem] h-full w-full overflow-hidden md:my-[4rem] lg:my-[6rem]">
      <img
        src={worldbg}
        className="absolute bottom-0 left-0 right-0 top-0 z-[-1] hidden h-full w-full object-cover opacity-10"
        alt=""
      />
      <div className="container mx-auto flex h-fit flex-col items-center justify-center gap-[2.5rem] p-[2rem]">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className={headlinetStyle}>{headline}</h1>
          <p className={sublinetStyle}>{subline}</p>
        </div>
        <DiscoverSlider
          breakpoints={breakpoints}
          slidesPerView={slidesPerView}
          slidesData={slidesData}
          cardSize={cardSize}
          topic={topic}
        />
        <Link to="#">
          <button className="btn btn-outline whitespace-nowrap">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
