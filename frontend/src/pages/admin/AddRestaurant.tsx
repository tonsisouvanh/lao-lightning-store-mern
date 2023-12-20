import { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { RootState } from "../../store/store";
import { createRestaurant, reset } from "../../store/feature/restaurantSlice";
import { Restaurant } from "../../type";
import toast from "react-hot-toast";

type Props = {};

const AddRestaurant = (props: Props) => {
  const dispatch = useAppDispatch();
  const { restaurants, error, addStatus } = useAppSelector(
    (state: RootState) => state.restaurant,
  );

  const { pathname } = useLocation();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [openingHours, setOpeningHours] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const restaurantData: Restaurant = {
      name: name,
      description: description,
      openingHours: openingHours,
      location: location,
    };

    const fetchData = async () => {
      await dispatch(createRestaurant({ restaurantData }));
    };
    fetchData();

    setName("");
    setDescription("");
    setOpeningHours("");
    setLocation("");
  };

  useEffect(() => {
    if (addStatus === "succeeded") {
      toast.success("Added");
    } else if (addStatus === "failed") {
      toast.error("Failed");
    }
    dispatch(reset());
  }, [addStatus, dispatch]);

  return (
    <section className="body-font relative">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          {/* {addStatus === "succeeded" ? (
            <div className="alert alert-success">
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
              <span>Data has been added</span>
            </div>
          ) : addStatus === "failed" ? (
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
              <span>{error}</span>
            </div>
          ) : null} */}
          <h1 className="title-font mb-4 text-2xl font-medium text-secondary sm:text-3xl">
            Add Restaurant
          </h1>
          <Breadcrumbs pathname={pathname} />
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form onSubmit={handleSubmit} className="">
            <div>
              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="input input-bordered w-full text-secondary/50"
                  />
                </label>
              </div>

              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="textarea textarea-bordered w-full text-secondary/50"
                  />
                </label>
              </div>

              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Opening Hours</span>
                  </div>
                  <input
                    name="openingHours"
                    type="text"
                    value={openingHours}
                    onChange={(e) => setOpeningHours(e.target.value)}
                    placeholder="Opening Hours"
                    className="input input-bordered w-full text-secondary/50"
                  />
                </label>
              </div>

              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Location</span>
                  </div>
                  <input
                    name="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="input input-bordered w-full text-secondary/50"
                  />
                </label>
              </div>
            </div>
            <div className="mt-8 flex w-full gap-4 border-t border-gray-200 p-2 pt-8 text-center">
              {addStatus === "loading" ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                <button type="submit" className="btn btn-primary">
                  CREATE
                </button>
              )}
              <button type="button" className="btn btn-outline btn-primary">
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRestaurant;
