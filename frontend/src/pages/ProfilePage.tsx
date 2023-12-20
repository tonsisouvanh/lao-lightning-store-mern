import { useState } from "react";
import { useAppSelector } from "../hook/hook";
import { RootState } from "../store/store";

const ProfilePage = () => {
  const { auth } = useAppSelector((state: RootState) => state.auth);
  const [fullname, setfullname] = useState<string>(auth?.fullname || "");
  const [email, setEmail] = useState<string>(auth?.email || "");
  const [password, setPassword] = useState<string>(auth?.password || "");
  const [image, setImage] = useState<string>(auth?.image || "");

  return (
    <section className="body-font relative">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-secondary sm:text-3xl">
            Profile
          </h1>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="">
            <div>
              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Full Name</span>
                  </div>
                  <input
                    name="fullname"
                    type="text"
                    value={fullname}
                    onChange={(e) => setfullname(e.target.value)}
                    placeholder="Your full name"
                    className="input text-secondary/50 input-bordered w-full"
                  />
                </label>
              </div>
              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input text-secondary/50 input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Your password"
                    className="input text-secondary/50 input-bordered w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="relative mb-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Image URL</span>
                  </div>
                  <input
                    type="text"
                    placeholder="URL to your image"
                    className="input text-secondary/50 input-bordered w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
