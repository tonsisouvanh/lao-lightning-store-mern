import { BlogType } from "../../type";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  cardData: BlogType;
  cardSize?: string;
  topic?: string;
};

const BlogCard = ({ cardData }: Props) => {
  return (
    <>
      <div className="card card-bordered card-compact w-96 rounded-none bg-base-100 shadow-xl">
        <figure className="h-[15rem]">
          <LazyLoadImage
            className="bg-gradient-to-br from-fuchsia-500 to-cyan-500 !object-contain px-1"
            src={cardData.imageUrl}
            alt="bitcoin"
            effect="blur"
            width="100%"
            height="100%"
          />
        </figure>
        <div className="card-body space-y-10">
          <div className="space-y-2">
            <div className="card-title">
              <div className="flex flex-col text-start">
                <p className="badge badge-secondary badge-sm mb-1">
                  {cardData.category}
                </p>
                <p className="text-sm">{cardData.title}</p>
              </div>
            </div>
            <p className="text-start text-xs">{cardData.description}</p>
          </div>
          <div className="card-actions items-center justify-start">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="font-bold text-sky-900">
                {cardData.authorName}
              </div>
              <div className="text-base-content/50">{cardData.authorTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
