import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

type Props = {};

const AddFood = (props: Props) => {
  const { pathname } = useLocation();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [openingHours, setOpeningHours] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  // Submit function
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Perform your form submission logic here, e.g., send data to the server
    const formData = {
      name,
      description,
      openingHours,
      location,
      // Add other form data as needed
    };

    // Reset form fields if needed
    setName("");
    setDescription("");
    setOpeningHours("");
    setLocation("");
  };
  return (
    <section className="body-font relative">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-secondary sm:text-3xl">
            Add Food
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
              <button className="btn btn-primary">CREATE</button>
              <button className="btn btn-outline btn-primary">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddFood;
