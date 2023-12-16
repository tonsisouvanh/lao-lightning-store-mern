import { LazyLoadImage } from "react-lazy-load-image-component";
import bgIntro from "../../assets/images/intro.png";


const Hero = () => {
  return (
    <div className="relative h-full w-full overflow-hidden lg:min-h-screen">
      {/* <img
        src={bgIntro}
        className="md:absolute md:object-cover md:z-[-1] md:left-0 md:top-0 md:right-0 md:bottom-0 w-full h-auto"
        alt=""
      /> */}
      <LazyLoadImage
        className="h-auto w-full md:absolute md:bottom-0 md:left-0 md:right-0 md:top-[-1.5rem] md:z-[-1] md:object-cover"
        src={bgIntro}
        alt={"lightning store"}
        effect="blur"
        width="100%"
      />
      <div className="container mx-auto w-full p-[2rem] md:grid md:grid-cols-2">
        <div className="col-span-1 flex flex-col items-start space-y-5 md:space-y-12 md:self-start">
          <div className="flex-col z-[1] gap-2 space-y-5 lg:mt-20 lg:gap-[30px]">
            <div className="relative">
              <div className="text-xs md:text-neutral-200">Lightning</div>
              <div className="text-md text-2xl font-semibold leading-relaxed md:text-neutral-200 lg:text-4xl xl:text-6xl">
                Unlock Instant Payments with Bitcoin Lightning: The Revolution
                is Here.
              </div>
            </div>
            <div className="self-stretch text-xs font-normal leading-tight  md:text-neutral-200 lg:text-xl">
              Effortless payments, anytime, anywhere. Explore the future of
              currency with Bitcoin Lightning – where speed meets security for a
              seamless transaction experience.
            </div>
          </div>
          <div className="z-[1] flex flex-wrap gap-4">
            <button className="btn btn-primary btn-wide rounded-full bg-primary shadow-2xl shadow-orange-500/20 lg:btn-lg">
              SIGNUP
            </button>
            <button className="btn btn-outline btn-wide rounded-full lg:btn-lg md:hidden">
              EXPLORE MORE
            </button>
            <button className="btn btn-outline btn-primary btn-wide hidden rounded-full !text-white lg:btn-lg md:flex">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
