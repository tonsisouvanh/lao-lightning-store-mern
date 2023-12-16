import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { sublinetStyle } from "../../globalStyle";
import { CardType } from "../../type";

type Props = {
  cardData: CardType;
  cardSize?: string;
  topic?: string;
};

const Card = ({ cardData, cardSize = "" }: Props) => {
  return (
    <div
      className={`relative h-[24.5rem] w-full overflow-hidden rounded-2xl ${cardSize}`}
    >
      <LazyLoadImage
        className="h-full w-full object-cover"
        src={cardData.imageUrl}
        alt={cardData.title}
        effect="blur"
        width="100%"
        height="100%"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-10 left-0 flex flex-col items-start gap-6 px-6">
        <div className="flex flex-col items-start gap-2">
          <h1
            className={`text-center text-2xl font-bold text-primary md:text-start lg:text-3xl lg:leading-tight`}
          >
            {/* {cardData.title} */}
            Savory Haven
          </h1>
          <p
            className={`
            ${sublinetStyle} text-start !text-neutral-300 lg:text-sm
            `}
          >
            {/* {cardData.description} */}
            Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor
            sit amet.
          </p>
        </div>
        <Link to="#" className="">
          <button className="btn btn-secondary btn-sm whitespace-nowrap rounded-full px-6 md:px-14">
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
