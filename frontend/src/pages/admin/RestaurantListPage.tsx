import { AiOutlinePlus } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import {
  deleteRestaurant,
  listRestaurants,
} from "../../store/feature/restaurantSlice";

const header: Record<string, string> = {
  name: "Name",
  description: "Description",
  openingHours: "Opening Hours",
  location: "Location",
};

const RestaurantListPage = () => {
  const dispatch = useAppDispatch();
  const { restaurants, error } = useAppSelector(
    (state: RootState) => state.restaurant,
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(listRestaurants({ rejectValue: { error: "" } }));
    };
    fetchData();
  }, [dispatch]);
  const handleDelete = (restaurantId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const fetchData = async () => {
        dispatch(deleteRestaurant({ restaurantId: restaurantId }));
      };
      fetchData();
    }
  };
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-2 text-3xl font-medium text-secondary sm:text-4xl">
            Restaurants List
          </h1>
          {error && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-info"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{error && error}</span>
            </div>
          )}
        </div>
        <div className="mx-auto w-full overflow-auto lg:w-2/3">
          <div className="mb-4 flex w-full">
            <Link to="/admin/restaurantlist/add">
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
                {restaurants &&
                  restaurants?.map((restaurant, index) => (
                    <tr className="hover" key={index}>
                      {Object.keys(header).map((key, colIndex) => (
                        <td key={colIndex} className="text-secondary/60">
                          {key === "image"
                            ? restaurant[key]?.map((imageUrl, imgIndex) => (
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
                        <Link
                          to={`/admin/restaurantlist/edit/${restaurant._id}`}
                        >
                          <button className="btn btn-xs">
                            <FaEdit />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(restaurant._id || "")}
                          className="btn btn-error btn-xs"
                        >
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

export default RestaurantListPage;
