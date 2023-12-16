import { mockBlogsData } from "../data/data";
import createblog from "../assets/svg/createblog.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AiOutlineEye, AiOutlineMessage } from "react-icons/ai";

const BlogPage = () => {
  const slidesData = mockBlogsData;
  return (
    <>
      <section className="body-font text-gray-600">
        {/* Hero section */}
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          allowSlidePrev={true}
          className="mySwiper"
        >
          {slidesData?.map((item) => (
            <SwiperSlide key={item?.id} className="mb-2 bg-transparent">
              <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row md:items-start">
                <div className="mb-10 h-[14rem] w-full md:mb-0 md:w-1/2 lg:h-[25rem] lg:w-full lg:max-w-lg">
                  <img
                    className="h-full w-full rounded object-contain object-center"
                    alt={item?.title}
                    src={item?.imageUrl}
                  />
                </div>
                <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                  <h1 className="title-font mb-4 text-3xl font-medium text-secondary sm:text-4xl">
                    {item?.title}
                  </h1>
                  <p className="mb-4 leading-relaxed text-secondary/60">
                    {item?.description}
                  </p>
                  <div className="mb-10 flex items-center gap-2">
                    <div className="badge badge-outline">{item?.category}</div>
                  </div>
                  <div className="flex w-full items-end justify-center md:justify-start">
                    <div className="relative mr-4 w-2/4 lg:w-full xl:w-1/2">
                      <div className="avatar">
                        <div className="w-10 rounded-full lg:w-14">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="title-font font-medium text-base-content">
                          Holden Caulfield
                        </h2>
                        <p className="text-gray-500">UI Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Blog list */}
        <div className="container mx-auto px-5 py-20">
          <div className="my-6 flex flex-col gap-4">
            <div className="carousel gap-2 rounded-box">
              {mockBlogsData.map((item, index) => (
                <div key={item.id} className="carousel-item">
                  <div
                    className={`badge badge-outline badge-lg cursor-pointer transition duration-300 hover:bg-primary ${
                      index === 1 && "bg-primary"
                    }`}
                  >
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
            <div className="join">
              <div>
                <div>
                  <input
                    className="input join-item input-bordered input-sm w-full"
                    placeholder="Search"
                  />
                </div>
              </div>
              <select className="join-item select select-bordered select-sm">
                <option disabled selected>
                  Filter
                </option>
                {mockBlogsData.map((item) => (
                  <option>{item.category}</option>
                ))}
              </select>
              {/* <button className="btn join-item btn-sm">Search</button> */}
            </div>
          </div>
          <div className="-m-4 flex flex-wrap">
            {mockBlogsData.map((item) => (
              <div className="w-full p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <div className="w-full md:h-36 lg:h-48">
                    <img
                      className="h-full w-full object-cover object-center"
                      src={item?.imageUrl}
                      alt="blog"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                      {item?.category}
                    </h2>
                    <h1 className="title-font mb-3 text-lg font-medium text-base-content">
                      {item?.title}
                    </h1>
                    <p className="mb-3 truncate leading-relaxed">
                      {item?.description}
                    </p>
                    <div className="flex flex-wrap items-center ">
                      <Link
                        to="#"
                        className="flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                      >
                        <span>Learn More</span>
                        <FaCaretRight />
                      </Link>
                      <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                        <AiOutlineEye className="mr-1 h-5 w-5" />6
                      </span>
                      <span className="inline-flex items-center text-sm leading-none text-gray-400">
                        <AiOutlineMessage className="mr-1 h-4 w-4" />6 1.2K
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Latest blog slider */}
        <div className="container mx-auto px-5 py-20">
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <div className="mb-16 flex w-full flex-col gap-2">
                <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                  <h1 className="title-font mb-2 text-2xl font-medium text-secondary sm:text-3xl">
                    Discover the Latest Blogs
                  </h1>
                  <div className="h-1 w-20 rounded bg-indigo-500"></div>
                </div>
                <p className="w-full leading-relaxed text-gray-500 text-secondary/60 lg:w-1/2">
                  Stay informed with our concise blog summaries.
                </p>
              </div>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                allowSlidePrev={true}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {slidesData?.map((item) => (
                  <SwiperSlide key={item?.id} className="mb-2 bg-transparent">
                    <div className="w-full p-4">
                      <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                        <div className="h-[16rem] w-full md:h-[12rem] lg:h-[16rem]">
                          <img
                            className="h-full w-full object-cover object-center"
                            src={item?.imageUrl}
                            alt="blog"
                          />
                        </div>
                        <div className="p-6">
                          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                            {item?.category}
                          </h2>
                          <h1 className="title-font mb-3 text-lg font-medium text-base-content">
                            {item?.title}
                          </h1>
                          <p className="mb-3 truncate text-sm leading-relaxed">
                            {item?.description}
                          </p>
                          <div className="flex flex-wrap items-center ">
                            <Link
                              to="#"
                              className="flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                            >
                              <span>Learn More</span>
                              <FaCaretRight />
                            </Link>
                            <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                              <AiOutlineEye className="mr-1 h-5 w-5" />6
                            </span>
                            <span className="inline-flex items-center text-sm leading-none text-gray-400">
                              <AiOutlineMessage className="mr-1 h-4 w-4" />6
                              1.2K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>

        {/* Sign up to create blog */}
        <div className="bg-base-200 px-5 py-20">
          <div className="container mx-auto flex flex-wrap px-5 py-24">
            <div className=" mb-auto mt-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4">
                <h1 className="title-font mb-2 text-4xl font-medium text-secondary">
                  Empower Your Voice
                </h1>
                <div className="leading-relaxed text-secondary/60">
                  Write and Discover Blogs, share your insights and explore
                  engaging blog summaries.
                </div>
              </div>
              <Link to="/blog/create">
                <button className="btn btn-primary">Create Blog</button>
              </Link>
            </div>
            <div className="mt-6 w-full overflow-hidden rounded-lg sm:mt-0 lg:w-1/2">
              <img
                className="h-full w-full object-cover object-center"
                src={createblog}
                alt="stats"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
