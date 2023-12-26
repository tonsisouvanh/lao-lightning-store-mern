const restaurant = {
  name: "Laos Fusion Bistro",
  description: "A blend of traditional Laotian flavors with a modern twist.",
  openingHours: "11:00 AM - 10:00 PM",
  location: "Vientiane, Laos",
};
const comments = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut mollitia at sed perspiciatis maxime debitis quo sequi",
    rating: 4,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Inventore exercitationem officia, accusantium sequi soluta velit alias deserunt odio.",
    rating: 5,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Consectetur adipisicing elit. Nisi eum aspernatur sequi veniam.",
    rating: 3,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Voluptatem eos ipsa fugit. Mollitia dignissimos iure porro cum repellendus",
    rating: 4,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Adipisci expedita veniam consectetur aspernatur",
    rating: 5,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Soluta illum quas molestiae iste placeat.",
    rating: 3,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Corrupti accusamus distinctio nisi.",
    rating: 4,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Quasi illo repudiandae deleniti distinctio",
    rating: 5,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Soluta quidem nisi repellendus",
    rating: 4,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    text: "Consectetur adipisicing elit. Nisi eum aspernatur sequi veniam.",
    rating: 3,
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
];
const calculateAverageRating = (ratings) => {
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return (sum / ratings.length).toFixed(1);
};
const RestaurantDetail = () => {
  const ratings = comments.map((comment) => comment.rating);

  return (
    <>
      <div className="hero min-h-screen bg-base-200 p-2">
        <div className="container max-w-6xl">
          <h2 className="card-title mx-auto my-10 w-fit text-2xl md:text-4xl">
            {restaurant.name}
          </h2>
          <div className="hero-content flex-col items-start md:space-x-10 lg:flex-row">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Discover
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{restaurant.description}</p>
                {/* <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div> */}
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="mb-2">Review</h1>
              {comments.map((comment, index) => (
                <div key={index} className="join gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={comment.avatar} alt={`User ${index} Avatar`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs">{comment.text}</p>
                    <div className="rating rating-xs">
                      {[...Array(5)].map((_, index) => (
                        <input
                          key={index}
                          type="radio"
                          name={`rating-${index}`}
                          className={`mask mask-star-2 bg-orange-400 ${
                            index < comment.rating ? "checked" : ""
                          }`}
                          readOnly
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;
