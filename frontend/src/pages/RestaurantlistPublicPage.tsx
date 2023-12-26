import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Cuisine Delight",
    description:
      "A fusion of flavors from around the world, offering a unique dining experience.",
  },
  {
    id: 2,
    name: "Spice Haven",
    description:
      "Serving spicy dishes inspired by the rich culinary traditions of South Asia.",
  },
  {
    id: 3,
    name: "Mediterranean Bistro",
    description:
      "Enjoy the fresh and healthy taste of Mediterranean cuisine in a cozy atmosphere.",
  },
  {
    id: 4,
    name: "Sushi Savor",
    description:
      "Indulge in the art of sushi-making with our expert chefs and premium ingredients.",
  },
  {
    id: 5,
    name: "Farm-to-Table Eats",
    description:
      "A commitment to locally-sourced, organic ingredients for a farm-fresh dining experience.",
  },
  {
    id: 6,
    name: "Urban Grillhouse",
    description:
      "Savor the smoky goodness of grilled dishes in a trendy, urban setting.",
  },
  {
    id: 7,
    name: "Sweet Treats Café",
    description:
      "A haven for dessert lovers, offering a delectable range of sweet indulgences.",
  },
  {
    id: 8,
    name: "Veggie Delights",
    description:
      "A paradise for vegetarians, featuring a diverse menu of plant-based delights.",
  },
  {
    id: 9,
    name: "Seafood Oasis",
    description:
      "Dive into the flavors of the sea with our fresh and expertly prepared seafood dishes.",
  },
  {
    id: 10,
    name: "Cozy Corner Pizzeria",
    description:
      "Experience the comfort of classic and creative pizzas in a warm and inviting ambiance.",
  },
];
const categories = [
  "All",
  "Asian",
  "Italian",
  "Mediterranean",
  "Vegetarian",
  "Seafood",
  "Grill",
  "Dessert",
];

const RestaurantlistPublicPage = () => {
  return (
    <div className="mx-auto my-10 max-w-4xl md:my-20">
      <h1 className="mb-20 text-center text-xl font-bold text-secondary md:text-4xl">
        All Restaurant
      </h1>
      <div className="flex flex-col items-start gap-2 px-5 md:flex-row">
        <ul className="container menu sticky top-28 z-[2] hidden w-[20rem] rounded-box border backdrop-blur-sm md:flex">
          <li>
            <h2 className="menu-title text-secondary">Category</h2>
            <ul>
              {categories.map((item, index) => (
                <li className="text-secondary/70" key={index}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="container menu menu-horizontal sticky top-28 z-[2] w-[20rem] rounded-box border backdrop-blur-sm md:hidden">
          {categories.map((item, index) => (
            <li className="text-secondary/70" key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
        <div className="space-y-10">
          <div className="container space-y-10 px-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="join items-center gap-4 p-2">
                <div className="join-item">
                  <div className="avatar">
                    <div className="w-28 rounded-xl ring ring-secondary ring-offset-2 ring-offset-base-100">
                      <LazyLoadImage
                        src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
                        alt={`Avatar for ${restaurant.name}`}
                        effect="blur"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
                <div className="join-item">
                  <h2 className="card-title">{restaurant.name}</h2>
                  <p>{restaurant.description}</p>
                  <Link to={`/restaurant/${1}`}>
                    <button className="btn btn-primary btn-sm mt-2 px-8">
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="container flex items-center justify-center">
            <div className="join">
              <button className="btn join-item btn-sm">«</button>
              <button className="btn join-item btn-sm">1</button>
              <button className="btn join-item btn-active btn-sm">2</button>
              <button className="btn join-item btn-sm">3</button>
              <button className="btn join-item btn-sm">4</button>
              <button className="btn join-item btn-sm">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantlistPublicPage;
