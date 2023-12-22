import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillFileImage } from "react-icons/ai";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import ImageUpload from "../../components/layout/ImageUpload";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { fetchRestaurantById } from "../../store/feature/restaurantDetailSlice";
import { reset, updateRestaurant } from "../../store/feature/restaurantSlice";
import { RootState } from "../../store/store";
import { Restaurant } from "../../type";

type Props = {};

const EditRestaurant = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [base64, setBase64] = useState<string | null>(null);
  const { id } = useParams();
  const { pathname } = useLocation();
  const [uploadImageToggle, setuploadImageToggle] = useState(false);
  const { restaurant, error, status } = useAppSelector(
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
    if (restaurant) {
      setName(restaurant?.name || "");
      setDescription(restaurant?.description || "");
      setOpeningHours(restaurant?.openingHours || "");
      setLocation(restaurant?.location || "");
    }
  }, [restaurant, updateStatus]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const addImage: string[] | null = base64 ? [base64 as string] : null;
    const updatedRestaurant: Restaurant = {
      _id: id,
      name,
      description,
      openingHours,
      location,
      image: addImage ? addImage : [],
    };

    const updateData = async () => {
      dispatch(updateRestaurant({ updatedRestaurant }));
    };
    updateData();
  };

  useEffect(() => {
    if (updateStatus === "succeeded") {
      toast.success("Updated!");
      dispatch(reset());
      navigate("/admin/restaurantlist");
    } else if (updateStatus === "failed") {
      toast.error(error);
      dispatch(reset());
    }
  }, [updateStatus, dispatch, navigate, error]);

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
                    className="input input-bordered w-full text-secondary/70"
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
                    className="textarea textarea-bordered w-full text-secondary/70"
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
                    className="input input-bordered w-full text-secondary/70"
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
                    className="input input-bordered w-full text-secondary/70"
                  />
                </label>
              </div>
              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Image</span>
                  </div>
                  {base64 ? (
                    <img
                      src={base64}
                      alt={restaurant?.name || "image"}
                      className="mb-4 h-[20rem] w-fit"
                    />
                  ) : (
                    <img
                      src={restaurant?.image[0]}
                      alt={restaurant?.name || "image"}
                    />
                  )}
                  {uploadImageToggle && <ImageUpload setBase64={setBase64} />}
                </label>
                <button
                  type="button"
                  onClick={() => setuploadImageToggle(!uploadImageToggle)}
                  className="btn btn-outline btn-sm mt-4"
                >
                  <AiFillFileImage />
                  {uploadImageToggle ? "Close" : "Edit"}
                </button>
              </div>
            </div>
            <div className="mt-8 flex w-full gap-4 border-t border-gray-200 p-2 pt-8 text-center">
              <button type="submit" className="btn btn-primary">
                UPDATE
              </button>
              <Link to="/admin/restaurantlist">
                <button className="btn btn-outline btn-primary">CANCEL</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditRestaurant;
