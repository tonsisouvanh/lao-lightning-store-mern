import { TestimonialType } from "../../type";

type Props = {
  cardData: TestimonialType;
  cardSize?: string;
  topic?: string;
};

const TestimonialCard = ({ cardData}: Props) => {
  return (
    <>
      <div className="card w-full lg:h-[18rem] bg-base-100 border shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center text-sm">
          <div className="card-title">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>{cardData.quote}</p>
          <div className="card-actions">
            <p className="text-neutral-400">{cardData.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
