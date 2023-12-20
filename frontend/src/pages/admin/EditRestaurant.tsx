import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { RootState } from "../../store/store";
import { fetchRestaurantById } from "../../store/feature/restaurantDetailSlice";
import { reset, updateRestaurant } from "../../store/feature/restaurantSlice";
import toast from "react-hot-toast";

type Props = {};

const EditRestaurant = (props: Props) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const { restaurant, status } = useAppSelector(
    (state: RootState) => state.restaurantDetail,
  );

  const { error: restaurantError, updateStatus } = useAppSelector(
    (state: RootState) => state.restaurant,
  );

  const [name, setName] = useState<string>(restaurant?.name || "");
  const [description, setDescription] = useState<string>(
    restaurant?.description || "",
  );
  const [openingHours, setOpeningHours] = useState<string>(
    restaurant?.openingHours || "",
  );
  const [location, setLocation] = useState<string>(restaurant?.location || "");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRestaurantById(id || ""));
    };
    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    if (status === "succeeded" && restaurant) {
      setName(restaurant?.name || "");
      setDescription(restaurant?.description || "");
      setOpeningHours(restaurant?.openingHours || "");
      setLocation(restaurant?.location || "");
    }
  }, [restaurant, status]);

  useEffect(() => {
    if (updateStatus === "succeeded") {
      toast.success("Added");
      navigate("/admin/restaurantlist");
    } else if (updateStatus === "failed") {
      toast.error(restaurantError);
    }
    dispatch(reset());
  }, [updateStatus, dispatch, restaurantError,navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const updatedRestaurant = {
      _id: id,
      name,
      description,
      openingHours,
      location,
    };

    const updateData = async () => {
      dispatch(updateRestaurant({ updatedRestaurant }));
    };
    updateData();
  };

  return (
    <section className="body-font relative">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-secondary sm:text-3xl">
            Edit Restaurant
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
              <button type="submit" className="btn btn-primary">
                UPDATE
              </button>
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

export default EditRestaurant;
