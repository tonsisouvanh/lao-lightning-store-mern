import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { useEffect, useState } from "react";
import { signIn } from "../store/feature/authSlice";
import { RootState } from "../store/store";

const SigninPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { auth, error } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [navigate, auth]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  return (
    <section className="body-font text-gray-600">
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <div className="container mx-auto flex flex-wrap items-center px-5 py-24">
        <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
          <h1 className="title-font text-3xl font-medium text-gray-900">
            Sign In Now!
          </h1>
          <p className="mt-4 leading-relaxed">
            To be able to comment, post and more.
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          className="mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6"
        >
          <h2 className="title-font mb-5 text-lg font-medium text-gray-900">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label className="text-sm leading-7 text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full focus:outline-primary"
            />
          </div>
          <div className="relative mb-4">
            <label className="text-sm leading-7 text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full focus:outline-primary"
            />
          </div>
          <button
            type="submit"
            className="rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Sign In
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </form>
      </div>
    </section>
  );
};

export default SigninPage;
