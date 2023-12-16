type Props = {};

const CreateBlog = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        <section className="body-font relative text-secondary/60">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-12 flex w-full flex-col text-center">
              <h1 className="title-font mb-4 text-2xl font-medium text-secondary sm:text-3xl">
                Create a new blog
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <div className="mx-auto md:w-2/3 lg:w-1/2">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-secondary/60"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded border border-gray-300 bg-opacity-50 px-3 py-1 text-base leading-8 text-secondary/60 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-secondary/60"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded border border-gray-300 bg-opacity-50 px-3 py-1 text-base leading-8 text-secondary/60 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-secondary/60"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="h-32 w-full resize-none rounded border border-gray-300 bg-opacity-50 px-3 py-1 text-base leading-6 text-secondary/60 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button className="btn btn-primary btn-wide text-white focus:outline-none">
                    Submit
                  </button>
                </div>
                <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
                  <a className="text-primary">example@email.com</a>
                  <p className="my-5 leading-normal">
                    49 Smith St.
                    <br />
                    Saint Cloud, MN 56301
                  </p>
                  <span className="inline-flex">
                    <a className="text-secondary/60">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-secondary/60">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-secondary/60">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-secondary/60">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateBlog;
