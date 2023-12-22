import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { RootState } from "../../store/store";
import { createRestaurant, reset } from "../../store/feature/restaurantSlice";
import { Restaurant } from "../../type";
import toast from "react-hot-toast";
import ImageUpload from "../../components/layout/ImageUpload";
import Loading from "../../components/UI/Loading";

const AddRestaurant = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [base64, setBase64] = useState<string | null>(null);
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
    const addImage: string[] | null = base64 ? [base64 as string] : null;
    const restaurantData: Restaurant = {
      name: name,
      description: description,
      openingHours: openingHours,
      location: location,
      image: addImage ? addImage : [],
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
      dispatch(reset());
      navigate("/admin/restaurantlist");
    } else if (addStatus === "failed") {
      toast.error(error);
      dispatch(reset());
    }
  }, [addStatus, dispatch, navigate, error]);
  return (
    <>
      {addStatus === "loading" ? (
        <Loading />
      ) : (
        <section className="body-font relative">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-12 flex w-full flex-col text-center">
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
                        className="input input-bordered w-full text-secondary/50"
                      />
                    </label>
                  </div>
                  <div className="relative mb-4">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Image</span>
                      </div>
                      {base64 ? (
                        <img src={base64} alt="Base64 Image" />
                      ) : (
                        <ImageUpload setBase64={setBase64} />
                      )}
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
                  <Link to="/admin/restaurantlist">
                    <button className="btn btn-outline btn-primary">
                      CANCEL
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddRestaurant;
