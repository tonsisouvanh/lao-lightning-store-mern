import {
  AiFillPlusCircle,
  AiFillPlusSquare,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { foodData } from "../../data/data";

const header: Record<string, string> = {
  name: "Name",
  category: "Category",
};

const FoodListPage = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-2 text-3xl font-medium text-secondary sm:text-4xl">
            Food List
          </h1>
          <p className="mx-auto text-base leading-relaxed text-secondary/60 lg:w-2/3">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="mx-auto w-full overflow-auto lg:w-2/3">
          <div className="mb-4 flex w-full">
            <Link to="/admin/foodlist/add">
              <button className="btn btn-primary ml-auto">
                <AiOutlinePlus className="font-bold" />
                ADD
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {Object.values(header).map((columnName, index) => (
                    <th
                      key={index}
                      // className="title-font bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-neutral"
                    >
                      {columnName}
                    </th>
                  ))}
                  <th
                  // className="title-font w-10 bg-gray-100 text-sm font-medium tracking-wider text-neutral"
                  />
                </tr>
              </thead>
              <tbody>
                {foodData.map((restaurant, index) => (
                  <tr className="hover" key={index}>
                    {Object.keys(header).map((key, colIndex) => (
                      <td key={colIndex} className="text-secondary/60">
                        {key === "image"
                          ? restaurant[key].map((imageUrl, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={imageUrl}
                                alt={`Restaurant Image ${imgIndex + 1}`}
                                // className="h-16 w-16 rounded-md object-cover"
                              />
                            ))
                          : restaurant[key]}
                      </td>
                    ))}
                    <td
                      // className="border-b-2 border-t-2 border-gray-200 text-center"
                      className="flex items-center gap-1"
                    >
                      <Link to={`/admin/restaurantlist/edit/${restaurant._id}`}>
                        <button className="btn btn-xs">
                          <FaEdit />
                        </button>
                      </Link>
                      <button className="btn btn-error btn-xs">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodListPage;
